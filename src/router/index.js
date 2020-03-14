import Vue from 'vue';
import Router from 'vue-router';
import index from '@/view/index';
import shoppingCart from '@/view/shoppingCart';
import my from '@/view/my';
import express from '@/view/express';
import payment from "@/view/payment";
import receiving from "@/view/receiving";
import evaluated from "@/view/evaluated";
import myOrder from "@/view/myOrder";
import getGoodsPrice from "@/view/getGoodsPrice";
import kdPayment from "@/view/kdPayment";
import kdDdFh from "@/view/kdDdFh";
import kdRecording from "@/view/kdRecording";

Vue.use(Router)
const router = new Router({
  mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: shoppingCart
    }, {
      path: '/my',
      name: 'my',
      component: my
    }, {
      path: '/express',
      name: 'express',
      component: express
    }, {
      path: '/payment',
      name: 'payment',
      component: payment
    }, {
      path: '/receiving',
      name: 'receiving',
      component: receiving
    }, {
      path: '/evaluated',
      name: 'evaluated',
      component: evaluated
    }, {
      path: '/myOrder',
      name: 'myOrder',
      component: myOrder
    }, {
      path: '/getGoodsPrice',
      name: 'getGoodsPrice',
      component: getGoodsPrice
    }, {
      path: '/kdPayment',
      name: 'kdPayment',
      component: kdPayment
    }, {
      path: '/kdDdFh',
      name: 'kdDdFh',
      component: kdDdFh
    }, {
      path: '/kdRecording',
      name: 'kdRecording',
      component: kdRecording
    }
  ]
})
export default router
