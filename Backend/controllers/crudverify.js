const crud = require('../models/crud')

const mostrar = async(req,res)=>{
    const [listar] = await crud.listar()
    return res.status(200).json(listar)
}

const adicionar = async(meta)=>{
    const inserir = await crud.adicionar(meta,'nao')
}

module.exports = {
    mostrar,
    adicionar
}