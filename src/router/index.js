import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Sobre from "@/views/Sobre.vue";
import Bitcoin from "@/views/Bitcoin.vue";
import Blog from "@/views/Blog.vue";
import Filmes from "@/views/Filmes.vue"; 
import Users from "@/views/Users.vue";
import UserBlog from "@/views/UserBlog.vue";
import UserPosts from "@/views/UserPosts.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    alias:'/',
  },
  {
    path: "/sobre",
    name: "Sobre",
    component: Sobre,
    alias: "/sobre",
  },
  {
    path: "/bitcoin",
    name: "Bitcoin",
    component: Bitcoin,
    alias: "/bitcoin",
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    alias: "/blog",
  },
  {
    path: "/filmes",
    name: "Filmes",
    component: Filmes,
    alias: "/filmes",
  },
  {
    path: "/users/:id",
    name: "Users",
    component: Users,
    children:[
      {path:'blog', component:UserBlog},
      {path:'posts', component:UserPosts}
  ],
    alias: "/users",
  },
  {
    path: "/:catchAll(.*)",
    component:NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory('/vue-cli-teste2/dist/'),
  routes,
 
});
export default router;