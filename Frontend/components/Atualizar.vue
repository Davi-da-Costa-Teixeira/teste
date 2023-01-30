<template>
    <div class="atualizar">
        <div class="container-atualizar">
            <form action="#" method="post">
                <p>Bora editar então <img src="/tranquilo.png" alt="diabinho" width="26px"></p>
                <textarea name="item-da-lista" id="newMeta" rows="4"></textarea>
                <div class="buttons">
                    <button class="botoes-do-container-Atualizar" @click="$emit('Cancelar')">Cancelar</button>
                    <button class="botoes-do-container-Atualizar">Atualizar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Atualizar',
    emits: ['Cancelar'],
}
</script>

<style>
textarea#newMeta {
    font-size: 1.2rem;
    padding: 8px;
    border-radius: 4px;
    max-height: 100px;
    outline: none;
    width: 92%;
    height: 30%;
    border: none;
}

div.atualizar {
    transition: all 0.4ms ease-out;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0%;
    left: 0%;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(1px);
    z-index: 100;
}

div.container-atualizar {
    box-shadow: 0px 0px 12px 2px;
    background-color: #545690;
    transition: 0.5s;
    width: 500px;
    height: 224px;
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

button.botoes-do-container-Atualizar {
    width: 90px;
    height: 35px;
    border-radius: 8px;
    color: white;
    background-color: #908ce5;
    border: double white 1px;
    font-size: 18px;
    font-weight: 600;
}

button.botoes-do-container-Atualizar:hover {
    transition: 0.1s;
    background-color: #242747;
}

button.botoes-do-container-Atualizar:active {
    background-color: #908ce5;
}


@media (max-width: 600px) {
    div.Atualizar {
        box-shadow: 0px 0px 12px 2px;
        background-color: #545690;
        transition: 0.5s;
        width: 90%;
        height: 224px;
        border-radius: 10px;
    }
}

@media (max-width: 480px) {
    div.Atualizar {
        box-shadow: 0px 0px 12px 2px;
        background-color: #545690;
        transition: 0.5s;
        width: 88%;
        height: 224px;
        border-radius: 10px;
    }
}
</style>