import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Product from '@/views/Product'
import ProductList from '@/views/ProductList'
// product
import ProductHome from '@/views/Product/Home'
import ProductReview from '@/views/Product/Review'
import ProductReviewDetail from '@/views/Product/ReviewDetail'

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
      props: route => ({id: Number(route.params.id)}),
      children: [
        // デフォルトのルート
        {
          name: 'product-home',
          path:'',
          component: ProductHome
        },
        {
          name: 'product-review',
          path: 'review',
          component: ProductReview
        },
        {
          name: 'review-detail',
          path: 'review/:rid',
          component: ProductReviewDetail
        }
      ]
    }
  ]
})
