// 1 - Sempre uma lib do core
// 2 - tenta procurar nas libs da node modules

// 3 - ./ tenta procurar um arquivo no sistema
const express = require('express')
const app = express()

const rotaDaHome = require('./routes/home')
rotaDaHome(app)

require('./routes/produtos')(app)

module.exports = app