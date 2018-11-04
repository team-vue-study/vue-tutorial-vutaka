import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Product from '@/views/Product'
import ProductList from '@/views/ProductList'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/product',
      name: 'ProductList',
      component: ProductList
    },
    // パラメータつきのパス数字のみ。
    {
      path: '/product/:id(\\d+)',
      name: 'Product',
      component: Product,
      props: route => ({id: Number(route.params.id)})
    }
  ]
})
