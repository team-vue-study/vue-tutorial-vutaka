<template>
  <div class="product">
    <h1>商品一覧</h1>
    <ul>
      <li v-for="{id, name} in allProducts" :key="id">
        <router-link :to="`/product/${id}`">{{name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: mapGetters('products', ['allProducts']),
  created() {
    this.$store.dispatch('products/fetch')
  },
  beforeDestory(){
    this.$store.dispatch('products/destory')
  }
}
</script>
