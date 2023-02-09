<template >
  <div>
    <div v-if="mostrar" class="inserir">
      <Adicionar @Cancelar="mostrar = !mostrar" />
    </div>
    <div class="img-background"></div>
    <span class="vienna">
      <img src="/vienna.png" alt="vienna" width="280px">
    </span>
    <span class="trissue"><img src="/Scar-trissue.png" alt="Scar-trissue" width="280px"></span>
    <div class="container">
      <Titulo />
      <BotaoAdicionar @Exibir="mostrar = !mostrar" />
      <Lista />
      <div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Atualizar from '~/components/Atualizar.vue';
import Excluir from '~/components/Excluir.vue';
import BotaoAdicionar from '~/components/BotaoAdicionar.vue';
import Lista from '~/components/Lista.vue'
import Titulo from '~/components/Titulo.vue'
import Adicionar from '~/components/Adicionar.vue';

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      mostrar: false,
      exibir: false,
      Apagar: false,
    }
  },
  layout: 'default.vue',
  components: {
    BotaoAdicionar, Lista, Titulo, Adicionar, Atualizar, Excluir
  }
})
</script>

<style>
div.inserir {
  transition: all 0.4ms ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0%;
  left: 0%;
  position: absolute;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(1px);
  z-index: 100;
}

span.vienna {
  position: absolute;
  margin-top: 330px;
  margin-left: 2%;
}

span.trissue {
  position: absolute;
  margin-top: 420px;
  right: 16%;

}

body {
  overflow: hidden;
  margin: 0%;
  background-image: url('/fotos-dos-role.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  background-color: #080321;
}

div.container {
  text-align: center;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 568.4px;
  height: max-content;
  padding-bottom: 20px;
}

div.img-background {
  background-color: #000007;
  opacity: .8;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  width: 100vw;
  height: 37vh;
}

@media (max-width: 600px) {
  div.container {
    text-align: center;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 468.4px;
    height: max-content;
    padding-bottom: 20px;
    transition: 0.2s;
  }

  body {
    transition: 0.1s;
    background-image: url('/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    background-color: #080321;
  }

  .trissue {
    display: none;
  }

  .vienna {
    display: none;
  }

  @media (max-width: 480px) {
    div.container {
      text-align: center;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      width: 400px;
      height: max-content;
      padding-bottom: 20px;
      transition: 0.2s;

    }

    body {
      height: 100%;
    }
  }

  @media (max-width: 370px) {
    body {
      height: 100%;
    }

    div.container {
      text-align: center;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      width: 360px;
      height: max-content;
      padding-bottom: 20px;
      transition: 0.2s;
    }
  }
}
</style>