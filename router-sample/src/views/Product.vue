<template>
  <div class="product">
    <h1>{{detail.name}}</h1>
    <nav class="nav">
      <router-link :to="{name: 'product-home'}">商品詳細</router-link>
      <router-link :to="{name: 'product-review'}">レヴュー</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  props: {
    id: Number
  },
  computed: mapGetters('products', ['detail']),
  watch: {
    id: {
      handler() {
        this.$store.dispatch('products/load', this.id)
      },
      immediate: true
    }
  },
  beforeDestory(){
    this.$store.dispatch('products/destory')
  }
};
</script>

