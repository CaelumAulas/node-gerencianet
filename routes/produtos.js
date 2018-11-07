module.exports = function(app) {
    app.get('/produtos', function(req, res) {
        // const produtos = [
        //     { nome: 'Livro Node', preco: 10.00 },
        //     { nome: 'Livro Java', preco: 10.00 },
        // ]
        
        res.render('produtos.ejs', {
            produtos: produtos
        })
    
    })


}