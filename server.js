// Common JS
const app = require('./app')

const porta = 3000
app.listen(porta, function() {
    console.log(`
        Deu tudo certo! servidor no ar em 
        http://localhost:${porta}
    `)
})




    // // Mostrar nome e preco do produto :)
    // res.send(`
    //     <ul>       
    //     ${
    //         produtos.map(function(produto) {
    //             return `<li> ${produto.nome} - ${produto.preco} </li>`
    //         }).join('')
    //     }  
    //     </ul>
    // `)