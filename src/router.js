import Vue from 'vue';
import Router from 'vue-router';
import Main from './pages/Main';
// import GoodsList from './pages/goodsList/GoodsList';

Vue.use(Router);

export default new Router({
  routes:[
    {
      path:'/',
      name:'jmain',
      component:Main
    },
    {
      path:'/goodsList',
      name:'goodsList',
      component:() => import('./pages/goodsList/GoodsList')
    },
    {
      path:'/goodsDetail',
      name:'goodsDetail',
      component:() => import('./pages/goodsDetail/GoodsDetail')
    },
    {
      path:'/buy',
      name:'buy',
      component:() => import('./pages/buy/Buy')
    }
  ]
})