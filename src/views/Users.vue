<template>
    <div  v-if="$route.params.id <= 2">
        <div v-if="$route.path == '/users/1' || $route.path == '/users/2'">
        <h1  class="titulo1">{{nome}}{{ $route.params.id }}</h1>
        <p class="texto1">
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos et unde explicabo, sed eius iusto, cum sint ea, nihil deleniti amet ad modi ab temporibus quis alias corrupti similique veniam libero reprehenderit laudantium aliquam quidem consequuntur architecto. Natus ea ullam sit assumenda a, ducimus ipsam nobis maxime totam deserunt quisquam.</p>
        <p class="texto1">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae accusamus possimus consectetur, quia laudantium impedit quaerat debitis quos ex dolorum eveniet, optio, blanditiis ducimus vel dignissimos? Officia debitis deserunt molestias ratione eum eaque illo quas, eligendi culpa sapiente facilis explicabo asperiores voluptates a non cupiditate libero! Illum amet, nam, exercitationem tempore consectetur nihil fuga fugit perspiciatis culpa nobis asperiores doloribus repellendus odit deserunt. Ipsa qui minus debitis temporibus voluptatibus impedit possimus fugit nobis commodi, magnam distinctio neque, saepe consectetur nesciunt accusantium aliquam repellat hic consequuntur tenetur, mollitia sed magni sapiente minima reprehenderit. Id aliquam delectus reiciendis dignissimos in reprehenderit suscipit.
        </p>
        </div>
        <div v-else>
        <router-view />
        </div>
    </div>
    <div v-else>
        <not-found />
    </div>
    

  
</template>

<script>
import NotFound from './NotFound.vue';
export default {
    components: { NotFound },
    name: 'Users',
    data(){
    return{
      nome:'página do Usuário: #',
    }
  }
}
</script>

<style>

</style>