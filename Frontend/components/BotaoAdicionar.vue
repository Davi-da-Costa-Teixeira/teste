<template>
    <div>
        <button @click="$emit('Exibir')" class="adicionar">Adicionar nova meta <img src="~/static/diabinho.png" width='30px' alt="diabinho"> <img src="~/static/diabinho.png" width='30px' alt=""></button>
    </div>
</template>

<script>
    export default {
    name: 'BotaoAdicionar',
    emits: ['Exibir']
}
</script>

<style>
    button.adicionar{
        transition: 0.3s;
        border-radius: 4px;
        position: relative;
        margin-left: 1%;
        margin-bottom: 40px;
        color: white;
        font-weight: bold;
        font-size: 20px;
        margin-top: 40px;
        width: 98%;
        height: 60px;
        background-color: #242747;
        border: solid 0.5px #908ce5;
    }
    button.adicionar:hover{
        border: solid 0.5px #000007;
        background-color: #908ce5;
        color: #000007;
    }
    button.adicionar:active{
        transition: 0.3s;
        border: solid 1px #908ce5;
        background-color: #1c1833;
    }
    img::selection{
        background: none;
    }
    button::selection{
        background: none;
    }
    @media (max-width: 600px){
        button.adicionar{
        transition: 0.3s;
        border-radius: 4px;
        position: relative;
        margin-left: 1%;
        margin-bottom: 40px;
        color: white;
        font-weight: bold;
        font-size: 20px;
        margin-top: 40px;
        width: 84%;
        height: 60px;
        background-color: #242747;
        border: solid 0.5px #908ce5;
    }
    @media (max-width: 480px){
        button.adicionar{
            margin-top: 20px;
        }
    }
    }
    @media (max-width: 370px){
        button.adicionar{
            margin-top: 20px;
        
    }
    }

    
</style>