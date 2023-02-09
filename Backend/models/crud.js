const connection = require('./connection')

const listar = async()=>{
    const metas = await connection.execute('select * from metas')
    return metas
}
const adicionar = async(meta,realizado)=>{
    const adicionar = await connection.execute('insert into metas(descricao,realizado)values(?,?)',[meta,realizado])
} 
const deletar = async(ID)=>{
    const apagar = await connection.execute('delete from metas where ID = ?',[ID])
}
const atualizar = async (desc,ID)=>{
    const atualizar = await connection.execute('update metas set descricao = ? where ID = ?', [desc,ID])
}
module.exports = {
    listar,
    adicionar,
    deletar,
    atualizar
}
