module.exports = function(app) {
    app.get('/', function(request,response) {
        response.send('Bem vindo a home')
    })
}