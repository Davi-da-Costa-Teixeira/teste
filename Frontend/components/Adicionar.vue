<template>
    <div class="adicionar">
        <div>
            <form action="Lista.vue"></form>
            <p>O que a gente faz agora? </p>
            <textarea name="meta" v-model="mensagem" id="novaMeta" rows="4"></textarea>
            <div class="buttons">
                <button class="botoes-do-container-adicionar" @click="$emit('Cancelar')">Cancelar</button>
                <button @click="$emit('Cancelar'); Adicionar()" class="botoes-do-container-adicionar">Criar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Adicionar',
    emits: ['Cancelar'],
    data() {
        return {
            mensagem: ''
        }
    },
    methods: {
        async Adicionar() {
            const adicionar = await this.$axios.$post('http://localhost:2222/', { meta: this.mensagem })
            this.$nuxt.$emit("refresh")

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

div>p {
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
    font-weight: 500;
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