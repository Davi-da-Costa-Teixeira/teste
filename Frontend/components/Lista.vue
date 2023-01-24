<template>
    <div>
        <div class="container-lista">
           
            <div class="itens">
                <label> <input type="checkbox" id="checkbox"><span> jogar guardioes ate nao querer mais</span></label>
                <div class="botoes-itens">
                    <div @click="$emit('Cancelar')" class="itens-container"><img src="~/static/editar.png" alt="editar" width="22px">
                </div>
                    <div class="lixeira-container">
                        <div @click="$emit('Excluir')" class="itens-container"><img src="~/static/lixeira.png" alt="editar" width="24px"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'Lista',
    emits:['Cancelar','Excluir']
}
</script>

<style>
    
    div.container-lista{
        box-shadow: 0px 0px 16px 5px ;
    }
    div.itens-container{
        vertical-align: middle;
        border: solid 1px whitesmoke;
        border-radius: 40px;
        width: 34px;
        height: 34px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #908ce5;
    }
    div.botoes-itens{
        padding-right: 5px ;
        width: 90px;
        display: flex;
        justify-content: space-around;
    }
    div.itens{
        padding-left: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;  
        border-bottom: solid 1px #908ce5;
        color: white;
        font-size: 20px;
        position: relative;
        width: 100%;
        height: 60px;
        background-color: #242747;
    }
    div.itens:hover{
        transition: 0.3s;
        color: #000007;
        border: solid 1px #908ce5;
        background-color: #908ce5;
    }
    div.itens-container:hover{
        background-color: white
    }
    div.itens-container:active{
        background-color: #242747
    }
    div.itens:active{
        transition: 0.2s;
        border: solid 1px #908ce5;
        background-color: #242747;
    }
    span::selection{
        background: #545690;
        color: white;
    }
    #checkbox:checked + span{
        transition: 0.2s;
        text-decoration: line-through;
        color: gray;
    }
    @media screen and (max-width: 600px){
        div.itens{
        transition: 0.2s;
        padding-left: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;  
        border-bottom: solid 1px #908ce5;
        color: white;
        font-size: 20px;
        position: relative;
        width: 100%;
        height: 80px;
        background-color: #242747;
    }
    @media (max-width: 480px){
        div.titulo{
        position: relative;
        top: 40px;
        border-radius: 14px;
        width: 80%;
        height: 120px;
      }
    }
    }
    @media (max-width: 370px){
      div.lixeira-container{
        padding-left: 5px;
      }
    }
</style>