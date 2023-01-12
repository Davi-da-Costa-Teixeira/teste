<template>
    <div class="titulo">
        <img class='titulo' width='100%' src="~/static/Titulo.png" alt="">
    </div>
</template>

<script>
    export default {
    name: 'Titulo'
}
</script>

<style>
    div.titulo{
        position: relative;
        top: 42px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 14px;
        width: 90%;
        height: 120px;
      }
    img.titulo{
        border-radius: 14px;
    }
    img.titulo:hover{
        border-radius: 14px;
        border: solid 0.5px #a94f82;;
    }
</style>