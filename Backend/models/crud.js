const connection = require('./connection')

const listar = async()=>{
    const metas = await connection.execute('select * from metas')
    return metas
}
const adicionar = async(meta,realizado)=>{
    const adicionar = await connection.execute('insert into metas(descricao,realizado)values(?,?)',[meta,realizado])
} 
module.exports = {
    listar,
    adicionar
}
