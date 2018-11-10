import products from '@/store/products.js'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    products: products
  }
});
export default store;