
module.exports = function(app) {
    app.get('/produtos', function(req, res) {
        const connection = connectionFactory()
        connection.query('SELECT * FROM livros', function(err, results) {
            connection.end()
            const produtos = results
            res.render('produtos.ejs', {
                produtos: produtos
            })
            // res.send({
            //     produtos: results
            // })
        })
    })

    app.get('/produtos/:id', function(req,res) {
        const idDoProduto = req.params.id
        const connectionFactory = require('../infra/connectionFactory')
        const connection = connectionFactory()
        connection.query(`SELECT * FROM livros WHERE id = ${idDoProduto}` , function(err, results) {
            connection.end()
            // pegar o produto
            const produto = results
            // mandar pra pagina
            res.send(produto)

        })
    })


}