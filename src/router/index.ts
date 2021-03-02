import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import money from '@/views/Money.vue';
import labels from '@/views/Labels.vue';
import Statistic from '@/views/Statistic.vue';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import NotFound from '@/views/NotFound.vue';
Vue.use(VueRouter)

function Statistics() {

}


const routes: Array<RouteConfig> = [
  {
    path:'/',
    // component:Money,
    redirect: './money' //重定向到money页面
  },
  {
    path:'/money',
    component:Money,
  },
  {
    path:'/labels',
    component:Labels,
  },
  {
    path:'/statistic',
    component:Statistic,
  },
  {
    path:'*',
    component:NotFound,
  },

]

const router = new VueRouter({
  routes
})

export default router
