<template>
   <h1 class="titulo1">{{nome}}</h1>
   <h2 class="valor-titulo">Valor do BitCoin neste momento</h2>
   <h2 class="valor-titulo">US$: {{bitcoinvalor}}</h2>
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
  name: 'Bitcoin',
      data(){
        return{
            nome:'Valor Bitcoin',
            bitcoinvalor:''
            
        }
    },
    mounted(){
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then((r)=>{
                let valor = r.data.bpi.USD.rate;
               this.bitcoinvalor = valor;
               
            });
    }
}
</script>

<style>
.valor-titulo{
 color:#052f58 ;
 margin-top: 30px;
}

</style>