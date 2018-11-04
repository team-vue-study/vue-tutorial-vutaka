<template>
  <div class="product">
    <h1>商品一覧</h1>
    <ul>
      <li v-for="{id, name} in list" :key="id">
        <router-link :to="`/product/${id}`">{{name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import products from '@/api/product.js'
export default {
  computed:{
    list: () => products.fetch()
  }
}
</script>
