<template>
  <div>
  <h1 class="titulo1">{{nome}}{{ $route.params.id }}</h1>
  
 <div class="blogao">
    <p class="carregando" v-if="filmes==''">Carregando...</p>
    <div v-for="filme in filmes" v-bind:key="filme" class="filmitem">
        <img :src="filme.avatar" />
        <h4>{{filme.titulo}}</h4>
    </div>
  </div>
  
</div>
</template>

<script>
import axios from 'axios';
export default {
    name:'UserBlog',
     data(){
        return{
            nome:'Blog do usuário',
            filmes:[],
            
        }
    },
    methods:{
    },
    mounted(){
       axios
       .get('https://api.b7web.com.br/cinema/')
       .then(json =>{
           //console.log(json.data)

           this.filmes = json.data;
       });

    }
}

</script>

<style>

</style>