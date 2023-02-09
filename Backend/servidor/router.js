const express = require('express')
const router = express.Router()
const crud = require('../models/crud')
const crud_vf = require('../controllers/crudverify')
require('dotenv').config()

const cors = require("cors")
router.use(cors())

const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

router.get('/',crud_vf.mostrar)

router.post('/', async (req,res)=>{
    res.status(200).json( await crud_vf.adicionar(req.body.meta))
})

router.get('/delete/:id', async (req,res)=>{
    res.status(200).json(await crud_vf.deletar(req.params.id))

})

router.post('/atualizar', async (req,res)=>{
     res.status(200).json(await crud_vf.atualizar(req.body.itemLista, req.body.ID))
})

module.exports = router