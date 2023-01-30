<template>
    <div class="adicionar">
        <form action="http://localhost:2222" method="post">
            <p>'O que a gente faz agora?' </p>
            <textarea v-model="meta" name="meta" id="novaMeta" rows="4"></textarea>
            <div class="buttons">
                <button class="botoes-do-container-adicionar" @click="$emit('Cancelar')">Cancelar</button>
                <button type="submit" class="botoes-do-container-adicionar">Criar</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Adicionar',
    emits: ['Cancelar'],
    data() {
        return {
            meta: ''
        }
    }
}
</script>

<style>
div.adicionar {
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

textarea#novaMeta {
    font-size: 1.2rem;
    padding: 8px;
    border-radius: 4px;
    max-height: 100px;
    outline: none;
    width: 92%;
    height: 30%;
    border: none;
    margin-left: 20px;
}

button.botoes-do-container-adicionar {
    width: 90px;
    height: 35px;
    border-radius: 8px;
    color: white;
    background-color: #908ce5;
    border: double white 1px;
    font-size: 18px;
    font-weight: 600;
}

button.botoes-do-container-adicionar:hover {
    transition: 0.1s;
    background-color: #242747;
}

button.botoes-do-container-adicionar:active {
    background-color: #908ce5;
}


@media (max-width: 600px) {
    div.adicionar {
        box-shadow: 0px 0px 12px 2px;
        background-color: #545690;
        transition: 0.5s;
        width: 90%;
        height: 224px;
        border-radius: 10px;
    }
}

@media (max-width: 480px) {
    div.adicionar {
        box-shadow: 0px 0px 12px 2px;
        background-color: #545690;
        transition: 0.5s;
        width: 88%;
        height: 224px;
        border-radius: 10px;
    }
}
</style>