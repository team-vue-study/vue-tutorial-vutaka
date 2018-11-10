import products from '@/api/product.js';

// 商品ようのVuexモジュール
export default {
  namespaced: true,
  state: {
    detail: {},
    allProducts: []
  },
  getters: {
    detail: state => state.detail,
    allProducts: state => state.allProducts
  },
  mutations: {
    setDetail(state, {detail}) {
      state.detail = detail
    },
    setAllProducts(state, allProducts) {
      state.allProducts = allProducts;
      console.log(state.allProducts)
    },
    clear(state) {
      state.detail = {};
      state.allProducts = [];
    }
  },
  actions: {
    load({commit}, id) {
      products.asyncFind(id, detail => {
        commit('setDetail', {detail})
      })
    },
    fetch({commit}) {
      commit('setAllProducts', products.fetch());
    },
    destroy({commit}) {
      commit('clear')
    }
  }
}