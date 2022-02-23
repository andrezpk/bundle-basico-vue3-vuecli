<template>
  <div>
  <h1 class="titulo1">{{nome}}{{ $route.params.id }}</h1>
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
    name:'UserPosts',
    data(){
        return{
            nome:'Posts do Usuário ',
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

</style>