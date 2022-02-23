<template>
<div>
  <h1 class="titulo1">{{nome}}</h1>
  
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
    name:'Filmes',
    data(){
        return{
            nome:'Filmes em Cartaz',
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
.filmitem{
    flex: 1;
    min-width: 300px;
    max-width: 500px;
    background-color:#4a274f;
    color: #fff;
    font-family: verdana;
    font-size: 25px;
    margin: 30px auto;
    text-align: center;
    margin: 10px;
}
.filmitem img{
    width: 80%;
    margin: 0 auto 20px auto;
}
.blogao{
display: flex;
flex-wrap: wrap;
margin-top: 30px;
}
.carregando{
    display: block;
    margin: 30px auto;
    font-size: 20px;
}
</style>