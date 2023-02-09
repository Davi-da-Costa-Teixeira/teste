<template>
    <div>
        <div class="container-lista">
            <div v-for="(meta, i) in metas" :key="i" class="itens">
                <label> <input type="checkbox" id="checkbox"><span>
                        {{ i+ 1}} - {{ meta.descricao }}
                    </span></label>
                <div class="botoes-itens">
                    <div @click="exibir = !exibir; submitdata(meta.descricao); submitID(meta.ID)" class="itens-container">
                        <img src="/edit.png" alt="editar" width="25px">
                    </div>
                    <div @click="Apagar = !Apagar; submitdata(meta.ID)" class="lixeira-container">
                        <div class="itens-container"><img src="/lixeiras.png" alt="editar" width="27px"></div>
                    </div>
                </div>
            </div>
            <div v-if="exibir" class="atualizar">
                <Atualizar :dados='transData' :ID='transID' @Cancelar="exibir = !exibir" />
            </div>
            <div v-if="Apagar" class="excluir">
                <Excluir :dados="transData" @Cancelar="Apagar = !Apagar" @Excluir="Apagar = !Apagar" />
            </div>
        </div>
    </div>
</template>0

<script>

export default {
    name: 'Lista',
    emits: ['Cancelar', 'Excluir'],
    data() {
        return {
            exibir: false,
            Apagar: false,
            metas: {},
            transData: '',
            transID: ''
        }
    },
    beforeMount() {
        this.$nuxt.$on("refresh", () => {
            this.$fetch(this.Lista);
        })
    },
    methods: {
        submitdata(dados) {
            this.transData = dados
        },
        submitID(ID) {
            this.transID = ID
        }
    },
    async fetch() {
        const descricao = await this.$axios.$get('http://localhost:2222/')
        this.metas = descricao

    }
}
</script>

<style>
div.container-lista {
    box-shadow: 0px 0px 16px 5px;
    max-height: 480px;
    overflow-y: auto;
}

div.itens-container {
    vertical-align: middle;
    border: solid 1px whitesmoke;
    border-radius: 40px;
    width: 34px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #908ce5;
}

div.botoes-itens {
    padding-right: 5px;
    width: 90px;
    display: flex;
    justify-content: space-around;
}

div.itens {
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #908ce5;
    color: white;
    font-size: 21px;
    position: relative;
    width: 100%;
    height: 60px;
    background-color: #242747;
}

div.itens:hover {
    transition: 0.3s;
    color: #000007;
    border: solid 1px #908ce5;
    background-color: #908ce5;
}

div.itens-container:hover {
    background-color: white
}

div.itens-container:active {
    background-color: #242747
}

div.itens:active {
    transition: 0.2s;
    border: solid 1px #908ce5;
    background-color: #242747;
}

span::selection {
    background: #545690;
    color: white;
}

#checkbox:checked+span {
    transition: 0.2s;
    text-decoration: line-through;
    color: gray;
}

@media screen and (max-width: 600px) {
    div.itens {
        transition: 0.2s;
        padding-left: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: solid 1px #908ce5;
        color: white;
        font-size: 20px;
        position: relative;
        width: 100%;
        height: 80px;
        background-color: #242747;
    }

    @media (max-width: 480px) {
        div.titulo {
            position: relative;
            top: 40px;
            border-radius: 14px;
            width: 80%;
            height: 120px;
        }
    }
}

@media (max-width: 370px) {
    div.lixeira-container {
        padding-left: 5px;
    }
}
</style>