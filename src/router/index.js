import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import shoppingCart from '@/view/shoppingCart'
import my from '@/view/my'
import express from '@/view/express'
import payment from "@/view/payment";

Vue.use(Router)
const router = new Router({
  mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: shoppingCart
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/express',
      name: 'express',
      component: express
    },
    {
      path: '/payment',
      name: 'payment',
      component: payment
    }
  ]
})
export default router
