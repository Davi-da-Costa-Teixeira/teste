const crud = require('../models/crud')

const mostrar = async(req,res)=>{
    const [listar] = await crud.listar()
    return res.status(200).json(listar)
}

const adicionar = async(meta)=>{
    const inserir = await crud.adicionar(meta,'nao')
}
const deletar = async(ID)=>{
    const deletar = await crud.deletar(ID)
}
const atualizar =  async(metas,ID)=>{
    const atualizar = await crud.atualizar(metas,ID)
}
module.exports = {
    mostrar,
    adicionar,
    deletar,
    atualizar
}