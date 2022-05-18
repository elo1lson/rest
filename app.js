const express = require('express')
const app = express()

const teste = require('./routes/teste')
app.use('/teste',teste)

module.exports = app