<template>
  <div class="product">
    <h1>商品情報</h1>
    <p>ID{{id}}の商品情報のページです</p>
    <div v-if="item" key="product">
      <dl>
        <dt>商品名</dt><dd>{{item.name}}</dd>
        <dt>お値段</dt><dd>{{item.cost}}</dd>
        <dt>備考</dt><dd>{{item.comment}}</dd>
      </dl>
    </div>
    <div v-else key="loading">読み込み中って言ってるじゃん！</div>
  </div>
</template>

<script>
import product from '@/api/product.js';

export default {
  props: {
    id: Number
  },
  data() {
    return {
      item: null
    }
  },
  watch: {
    id: {
      handler() {
        product.asyncFind(this.id, item => {
          this.item = item
        });
      },
      immediate: true
    }
  }
};
</script>

