<template>
    <div class="titulo">
        <img class='titulo' width='100%' src="~/static/Titulo.png" alt="titulo">
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
        top: 40px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 14px;
        width: 94%;
        height: 120px;
      }
    img.titulo{
        border-radius: 14px;
    }
    img.titulo:hover{
        border-radius: 14px;
        border: solid 0.5px #908ce5;;
    }
    @media (max-width: 600px){
        div.titulo{
        position: relative;
        top: 30px;
        border-radius: 14px;
        width: 90%;
        height: 120px;
      }
    }
    @media (max-width: 480px){
        div.titulo{
        position: relative;
        top: 30px;
        border-radius: 14px;
        width: 90%;
        height: 120px;
      }
    }

</style>