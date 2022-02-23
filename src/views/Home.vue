<template>
   <h1 class="titulo1">{{nome}}</h1>
   <h2 class="ip-titulo">Seu Ipv6 é:</h2>
   <h4 class="ip-titulo">{{ip}}</h4>
   <p class="texto1">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos et unde explicabo, sed eius iusto, cum sint ea, nihil deleniti amet ad modi ab temporibus quis alias corrupti similique veniam libero reprehenderit laudantium aliquam quidem consequuntur architecto. Natus ea ullam sit assumenda a, ducimus ipsam nobis maxime totam deserunt quisquam.</p>
    <p class="texto1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae accusamus possimus consectetur, quia laudantium impedit quaerat debitis quos ex dolorum eveniet, optio, blanditiis ducimus vel dignissimos? Officia debitis deserunt molestias ratione eum eaque illo quas, eligendi culpa sapiente facilis explicabo asperiores voluptates a non cupiditate libero! Illum amet, nam, exercitationem tempore consectetur nihil fuga fugit perspiciatis culpa nobis asperiores doloribus repellendus odit deserunt. Ipsa qui minus debitis temporibus voluptatibus impedit possimus fugit nobis commodi, magnam distinctio neque, saepe consectetur nesciunt accusantium aliquam repellat hic consequuntur tenetur, mollitia sed magni sapiente minima reprehenderit. Id aliquam delectus reiciendis dignissimos in reprehenderit suscipit.
   </p>
   <p class="texto1">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos et unde explicabo, sed eius iusto, cum sint ea, nihil deleniti amet ad modi ab temporibus quis alias corrupti similique veniam libero reprehenderit laudantium aliquam quidem consequuntur architecto. Natus ea ullam sit assumenda a, ducimus ipsam nobis maxime totam deserunt quisquam.</p>
    <p class="texto1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae accusamus possimus consectetur, quia laudantium impedit quaerat debitis quos ex dolorum eveniet, optio, blanditiis ducimus vel dignissimos? Officia debitis deserunt molestias ratione eum eaque illo quas, eligendi culpa sapiente facilis explicabo asperiores voluptates a non cupiditate libero! Illum amet, nam, exercitationem tempore consectetur nihil fuga fugit perspiciatis culpa nobis asperiores doloribus repellendus odit deserunt. Ipsa qui minus debitis temporibus voluptatibus impedit possimus fugit nobis commodi, magnam distinctio neque, saepe consectetur nesciunt accusantium aliquam repellat hic consequuntur tenetur, mollitia sed magni sapiente minima reprehenderit. Id aliquam delectus reiciendis dignissimos in reprehenderit suscipit.
   </p>
   <p class="texto1">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos et unde explicabo, sed eius iusto, cum sint ea, nihil deleniti amet ad modi ab temporibus quis alias corrupti similique veniam libero reprehenderit laudantium aliquam quidem consequuntur architecto. Natus ea ullam sit assumenda a, ducimus ipsam nobis maxime totam deserunt quisquam.</p>
    <p class="texto1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae accusamus possimus consectetur, quia laudantium impedit quaerat debitis quos ex dolorum eveniet, optio, blanditiis ducimus vel dignissimos? Officia debitis deserunt molestias ratione eum eaque illo quas, eligendi culpa sapiente facilis explicabo asperiores voluptates a non cupiditate libero! Illum amet, nam, exercitationem tempore consectetur nihil fuga fugit perspiciatis culpa nobis asperiores doloribus repellendus odit deserunt. Ipsa qui minus debitis temporibus voluptatibus impedit possimus fugit nobis commodi, magnam distinctio neque, saepe consectetur nesciunt accusantium aliquam repellat hic consequuntur tenetur, mollitia sed magni sapiente minima reprehenderit. Id aliquam delectus reiciendis dignissimos in reprehenderit suscipit.
   </p>
   

</template>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  data(){
        return{
            nome:'Pagina-Home',
            ip:'Carregando...'
        }
    },
    mounted(){
        axios
            .get('http://ip.jsontest.com')
            .then((r)=>{
                this.ip = r.data.ip
                console.log(r.data.ip);

            });
    }
}
</script>

<style>
.titulo1{
 margin-top: 50px;
}
.texto1{
 margin: 30px auto;
 width: 500px;
 font-size: 15px;
 text-align: left;
 text-indent: 40px;
}
.ip-titulo{
 color:#052f58 ;
 margin-top: 30px;
}

</style>