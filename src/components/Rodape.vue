<template>
  <div class="rodape">
        <div class="rodape-texto">
            <div class="rodape-logo"><img src="../assets/logo.svg" alt="logo"></div>
            <div class="copyright">&copy; TODOS OS DIREITOS RESERVADO A ZPKorp 2022</div>

        </div>
  </div>
</template>

<script>
export default {
  name: 'Rodape',
 
}
</script>

<style>
.rodape{
    height: 100px;
    background-color: rgb(223, 217, 222);
    border-top: 2px solid #030f1b;
    display: flex;
    justify-content: center;
    align-items: center;
}
.rodape-texto{
 display: flex;
 justify-content: center;
    align-items: center;
}
.rodape-logo{
    width: 50px;
    height: 50px;
}


.copyright{
    margin-left: 30px;
}
</style>