import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import shoppingCart from '@/view/shoppingCart'
import {route} from "vant/lib/utils/router";

Vue.use(Router)
const router = new Router({
  mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: shoppingCart
    }
  ]
})
  export default router
