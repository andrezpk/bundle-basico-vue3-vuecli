<template>
    <div class="geral">
  <div class="not-found"><img src="../assets/404.svg" alt="logo"></div>
  <div class="volta"><router-link to="/" class="back">Voltar para a Home</router-link> </div>
  </div>
</template>

<script>
export default {
    name:'NotFound'
}
</script>

<style>
.not-found{
    width: 600px;
    margin: 0 auto;
}
.back{
    display: inline-block;
    margin: 100px auto;
    padding: 20px;
    background-color: #030f1b;
    color: #efa07b;
    text-decoration: none;
    font-size: 20px;
}
.back:hover{

    background-color: #1f70c0;
    color: #531e05;
}
</style>