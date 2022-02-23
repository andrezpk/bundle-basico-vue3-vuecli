<template>
    <div id="nav" class="top-nav">
      <router-link to="/" class="link">Home</router-link> 
      <router-link to="/sobre" class="link">Sobre</router-link>
      <router-link to="/bitcoin" class="link">Valor BitCoin</router-link>
      <router-link to="/blog" class="link">Blog</router-link>
      <router-link to="/filmes" class="link">Filmes em Cartaz</router-link>
  </div>
  <div id="nav" class="top-nav2">
      <div class="us">
        <h4>Usuário #1</h4>
        <router-link to="/users/1" class="link2">Página Pessoal</router-link> 
        <router-link to="/users/1/posts" class="link2">Posts</router-link> 
        <router-link to="/users/1/blog" class="link2">Blog</router-link>
      </div>
      <div class="us">
      <h4>Usuário #2</h4>
        <router-link to="/users/2" class="link2">Página Pessoal</router-link> 
        <router-link to="/users/2/posts" class="link2">Posts</router-link> 
        <router-link to="/users/2/blog" class="link2">Blog</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Navtop',
 
}
</script>

<style>

.top-nav{
 display: flex;
 justify-content: center;
 align-items: center;

}

.top-nav2{
 display: flex;
 justify-content: center;
 align-items: center;
margin-top: 20px;
}


.link{
  font-size: 20px;
  text-decoration: none;
  display: block;
  padding: 10px;
  color: #030f1b;
}

.link:hover{
  background-color: #030f1b;
  color: #efa07b;
}

.us{
  display: flex;
  flex-direction: column;
}

.link2{
  font-size: 12px;
  text-decoration: none;
  display: block;
  padding: 10px;
  color: #030f1b;
}

.link2:hover{
  background-color: #030f1b;
  color: #efa07b;
}


</style>

