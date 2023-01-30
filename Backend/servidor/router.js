const express = require('express')
const router = express.Router()
const crud = require('../models/crud')
const crud_vf = require('../controllers/crudverify')

const cors = require("cors")
router.use(cors())

const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

router.get('/',crud_vf.mostrar)

router.post('/',(req,res)=>{
    crud_vf.adicionar(req.body.meta)
    res.redirect('http://localhost:3000')
})

module.exports = router