const express = require('express')
const  router= require('./router')
const app = express()
const cors = require("cors")

app.use(router)
app.use(cors())


app.listen(2222 ,console.log('servidor rodando na http:localhost:2222'))    