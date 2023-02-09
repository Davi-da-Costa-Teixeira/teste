<template>
    <div class="atualizar">
        <div class="container-atualizar">
            <div action="#" method="post">
                <p>Bora la editar <img src="/tranquilo.png" alt="diabinho" width="26px"></p>
                <textarea name="itemLista" v-model="dataUpdated" id="newMeta" rows="4">{{ dados }}</textarea>
                <div class="buttons">
                    <button class="botoes-do-container-Atualizar" @click="$emit('Cancelar')">Cancelar</button>
                    <button @click="$emit('Cancelar'), atualizar()"
                        class="botoes-do-container-Atualizar">Atualizar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Atualizar',
    emits: ['Cancelar'],
    data() {
        return {
            dataUpdated: this.dados
        }
    },
    props: {
        dados: {
            type: String
        },
        ID: {
            type: Number
        }
    },
    methods: {
        async atualizar() {
            const atualizar = await this.$axios.$post('http://localhost:2222/atualizar', {
                itemLista: this.dataUpdated,
                ID: this.ID
            })
            this.$nuxt.$emit("refresh")
        }
    }
}
</script>

<style>
textarea#newMeta {
    font-weight: 500;
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
    height: 100vh;
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