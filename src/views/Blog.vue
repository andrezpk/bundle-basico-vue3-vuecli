<template>
<div>
  <h1 class="titulo1">{{nome}}</h1>
  <div class="teste8">
    Título: <input type="text" v-model="addTitulo" /><br><br>
    Corpo: <textarea v-model="addCorpo" cols="30" rows="10"></textarea><br><br>
    <button v-on:click="add">Adicionar Artigo</button>
  </div>
  <div class="blogao">
    <div v-for="post in posts" v-bind:key="post" class="postitem">
        <h4>{{post.id}}</h4>
        <h4>{{post.title}}</h4>
        <p>{{post.body}}</p>
    </div>
  </div>
  
</div>
</template>

<script>
import axios from 'axios'

export default {
    name:'Blog',
    data(){
        return{
            nome:'Pagina de Posts - Blog',
            posts:[],
            addTitulo:'',
            addCorpo:''
            
        }
    },
    methods:{
        add:function(){
            axios
            .post('https://jsonplaceholder.typicode.com/posts', {
                userID:1,
                title:this.addTitulo,
                body:this.addCorpo
            })
            .then(json=>{
                console.log(json.data)
            })
            .finally(()=>{
                this.addTitulo='';
                this.addCorpo='';
            });
        }
    },
    mounted(){
       axios
       .get('https://jsonplaceholder.typicode.com/posts')
       .then(json =>{
           this.posts = json.data;
       });

    }
}
</script>

<style>
.teste8{
 margin: 30px auto;
}
.postitem{
    flex: 1;
    min-width: 400px;
    background-color:#4a274f;
    color: #fff;
    font-family: verdana;
    font-size: 25px;
    margin: 30px auto;
    text-align: center;
    margin: 10px;
}
.blogao{
display: flex;
flex-wrap: wrap;
}
</style>