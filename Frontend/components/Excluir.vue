<template>
    <div class="excluir">
        <div class="container-excluir">
            <form action="#" method="post">
                <p>Voce quer excluir? <img src="/susto.png" alt="diabinho" width="26px"></p>
                <div class="buttons">
                    <button class="botoes-do-container-Excluir" @click="$emit('Cancelar')">Cancelar</button>
                    <button type="submit" class="botoes-do-container-Excluir">Excluir</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Excluir',
    emits: ['Cancelar']
}
</script>

<style>
div.excluir {
    transition: all 0.4ms ease-out;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0%;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(1px);
    z-index: 100;
}

div.container-excluir {
    box-shadow: 0px 0px 12px 2px;
    background-color: #545690;
    transition: 0.5s;
    width: 270px;
    height: 124px;
    border-radius: 10px;
}

form>p {
    margin-left: 10px;
    padding: 15px 15px 0px 15px;
    font-size: 22px;
    font-weight: bold;
    color: white;
}

div.buttons {
    padding-top: 4px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
}

button.botoes-do-container-Excluir {
    width: 90px;
    height: 35px;
    border-radius: 8px;
    color: white;
    background-color: #908ce5;
    border: double white 1px;
    font-size: 18px;
    font-weight: 600;
}

button.botoes-do-container-Excluir:hover {
    transition: 0.1s;
    background-color: #242747;
}

button.botoes-do-container-Excluir:active {
    background-color: #908ce5;
}
</style>