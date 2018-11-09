class ProdutosDAO {    
    constructor(connection) {
        this.connection = connection
    }

    listarTodosOsLivros (callback) {
        this.connection.query(
                'SELECT * FROM livros', (err, results) => {
            this.connection.end()
            callback(err, results)
        })
    } 

    listaPorId(id) { // Callback Hell
        return new Promise((resolve, reject) => {
            this.connection.query(`SELECT * FROM livros WHERE id = ${id}` , (err, results) => {
                this.connection.end()
                if(err) reject(err)
                resolve(results)
            })
        })
    }
 
    novo(produto) {
        return new Promise((resolve,reject) => {
            this.connection.query('INSERT INTO livros SET ?', produto, function(err, results) {
                if(err) reject(err)
                resolve(results)
            })
        })
    }
}
module.exports = ProdutosDAO




// Contexto Dinâmico
    // function: this é o contexto de execução
// Contexto Léxico (Leitura)
    // () => this é o de onde ela foi criada


// module.exports = function(connection) {
//     return {
//         listarTodosOsLivros: function listarTodosOsLivros(callback) {
//             connection.query('SELECT * FROM livros',
//                 function(err, results) {
//                     connection.end()
//                     callback(err, results)
//                 }
//             )
//         },
//     }
// }