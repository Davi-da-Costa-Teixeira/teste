<template>
    <div class="Atualizar">
        <form action="#" method="post">
            <p>Bora editar então <img src="~/static/tranquilo.png" alt="diabinho" width="26px"></p>
            <textarea name="item-da-lista" id="novaMeta" rows="4"></textarea>
            <div class="buttons">
                <button class="botoes-do-container-Atualizar" @click="$emit('Cancelar')">Cancelar</button>
                <button type="submit" class="botoes-do-container-Atualizar">Atualizar</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default{
        name: 'Atualizar',
        emits: ['Cancelar']
    }
</script>

<style>
    div.Atualizar{
        box-shadow: 0px 0px 12px 2px ;
        background-color: #545690;
        transition: 0.5s;
        width: 500px;
        height: 224px;
        border-radius: 10px;
    }
    form > p{
        margin-left: 10px;
        padding: 15px 15px 0px 15px;
        font-size: 22px;
        font-weight: bold;
        color: white;
    }
    div.buttons{
        padding-top: 4px;
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        justify-content: space-between;
    }
    button.botoes-do-container-Atualizar{
        width: 90px;
        height: 35px;
        border-radius: 8px;
        color: white;
        background-color: #908ce5;
        border: double white 1px;
        font-size: 18px;
        font-weight: 600;
    }
    button.botoes-do-container-Atualizar:hover{
        transition: 0.1s;
        background-color: #242747;
    }
    button.botoes-do-container-Atualizar:active{
        background-color: #908ce5;
    }
    form > textarea{
        font-size: 1.2px;
        padding: 8px;
        border-radius: 4px;
        max-height: 100px;
        outline: none;
        width: 90%;
        border: none;
        margin-left: 25px;
            }
    @media (max-width: 600px){
        div.Atualizar{
        box-shadow: 0px 0px 12px 2px ;
        background-color: #545690;
        transition: 0.5s;
        width: 90%;
        height: 224px;
        border-radius: 10px;
    }
    }
    @media (max-width: 480px){
        div.Atualizar{
        box-shadow: 0px 0px 12px 2px ;
        background-color: #545690;
        transition: 0.5s;
        width: 88%;
        height: 224px;
        border-radius: 10px;
    }
    }
</style>