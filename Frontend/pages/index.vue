<template >
   <div>
    <div class="img-background"></div>
    <div class="container">
      <Titulo/>
      <BotaoAdicionar/>
      <Lista/>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import BotaoAdicionar from '~/components/BotaoAdicionar.vue';
import Lista from '~/components/Lista.vue'
import Titulo from '~/components/Titulo.vue'
export default Vue.extend({
  name: 'IndexPage',
  layout: 'default.vue',
  components:{
    BotaoAdicionar, Lista, Titulo
  }
})
</script>

<style>
    body{
      width: 100vw;
      height: 100vh;
      background-color: #000007
      }
      div.container{    
        border: solid 1px aliceblue;
        position: relative;
        margin-left: auto;
        margin-right: auto;    
        width: 580px;
        height: 100vh;
      }

      div.img-background{
        opacity: .4;
        background-image: url('~/static/Screenshot.png');
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        width: 100vw;
        height: 280px;
      }
</style>