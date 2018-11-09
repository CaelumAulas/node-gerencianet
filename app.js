// 1 - Sempre uma lib do core
// 2 - tenta procurar nas libs da node modules

// 3 - ./ tenta procurar um arquivo no sistema
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// MIddlewares



app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))


const rotaDaHome = require('./routes/home')
rotaDaHome(app)


require('./routes/produtos')(app)

app.use((req, res, next) => {
    res.send('Página 404')
})

module.exports = app