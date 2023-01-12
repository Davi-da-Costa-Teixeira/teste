<template>
    <div>
        <button class="adicionar">Adicionar nova meta <img src="~/static/diabinho.png" width='30px' alt=""> <img src="~/static/diabinho.png" width='30px' alt=""></button>
    </div>
</template>

<script>
    export default {
    name: 'BotaoAdicionar'
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
        background-color: #1c1833;
        border: solid 0.5px #a94f82;
    }
    button.adicionar:hover{
        border: solid 0.5px #000007;
        background-color: #a94f82;
    }
</style>