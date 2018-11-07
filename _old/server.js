const http = require('http')
const rotas = []

function get(url, funcao) {
    rotas[url] = funcao
}

get('/', function(request, response) {
    response.end('Home')
})

get('/produtos', function(request, response) {
    response.end('Produtos')
})


const server = http.createServer(function (request, response) {
    if(rotas[request.url]) {
        rotas[request.url](request,response)
    } 
    response.statusCode = 404
    response.end('Você achou vários nada')
}) // Callback


const porta = 3000
server.listen(porta)
console.log(`
    Deu tudo certo! servidor no ar em 
    http://localhost:${porta}
`) // Template String