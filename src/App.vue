<template>
  <div class="logo"><img src="./assets/logo.svg" alt="logo"></div>
  <navtop />
  <router-view />
  <rodape />
</template>

<script>
import Navtop from './components/Navtop.vue'
import Rodape from './components/Rodape.vue'


export default {
  components: { Navtop, Rodape },
  name: 'App',
 
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body{
  background-color: #f3eaf3;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #030f1b;
  /*margin-top: 60px;*/
}

.logo{
  width: 200px;
  height: 200px;
  margin: 20px auto;
}

</style>
