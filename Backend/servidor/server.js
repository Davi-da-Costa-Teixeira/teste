const express = require('express')
const  router= require('./router')
const app = express()
const cors = require("cors")
require('dotenv').config()

app.use(router)
app.use(cors())

app.listen(2222 ,console.log('servidor rodando na 2222'))    

module.exports = app