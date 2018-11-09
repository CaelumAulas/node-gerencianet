const connectionFactory = require('../infra/connectionFactory')
const ProdutosDAO = require('../infra/produtosDAO')
const validator = require('fluent-validator')

module.exports = function(app) {
    app.get('/produtos/form', function(req,res) { res.render('produtos/form.ejs') })
    app.post('/produtos', (req,res) => {
        const connection = connectionFactory()
        const produtosDAO = new ProdutosDAO(connection)
        const produto = req.body
        const validation = validator()
            .validate(produto.titulo).param('titulo')
                .isNotEmpty()
            .validate(produto.preco).param('preco')
                .isNotEmpty().and.isFloat()
            .validate(produto.descricao).param('descricao')
                .isNotEmpty()
    
        if(validation.hasErrors()) {
            res.render('produtos/form.ejs', { // ViewModel
                erros: validation.getErrors()
            })
            // res.send(validation.getErrors())
            return false;
        }
        // if(typeof produto.titulo !== 'string') { // err }
        // if(produto.titulo.trim().length < 0) { /// }
        // if(produto.preco) {}


        // titulo
        // preco
        // descrição
        
        produtosDAO.novo(produto)
            .then((resultado) => {
                console.log(resultado)
                res.redirect('/produtos')
            })
            .catch((err) => {
                console.log(err)
                res.send(err)
            })  
    })

    app.get('/produtos', function(req, res) {
        const connection = connectionFactory()
        const produtosDAO = new ProdutosDAO(connection)        
        produtosDAO.listarTodosOsLivros(function(err, results) {
            const produtos = results
            res.render('produtos/lista.ejs', { produtos: produtos })
        })
    })

    app.get('/produtos/:id', function(req,res) {
        const connection = connectionFactory()
        const produtosDAO = new ProdutosDAO(connection)
        const idDoProduto = req.params.id

        produtosDAO.listaPorId(idDoProduto).then((results) => {
                const produto = results
                res.send(produto)
                return 'alo alo w brazil'
            })
            .then((valorDoReturnDeCima) => {
                console.log(valorDoReturnDeCima)
            })
    })

}



