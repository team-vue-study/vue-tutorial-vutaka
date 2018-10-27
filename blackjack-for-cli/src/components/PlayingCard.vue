<template>
  <div class="card">
      <div class="display-mark top-left">
          <span>{{card.num}}</span>
          <span v-html="card.mark" />
      </div>
      <div class="display-mark bottom-right">
          <span>{{card.num}}</span>
          <span v-html="card.mark" />
      </div>
  </div>
</template>

<script>
import {card} from '@/components/class/card.js'
export default {
  name: 'PlayingCard',
  props: {
      card: card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card {
    background-color: bisque;
    display: inline-block;
    font-size: 1em;

    height: 200px;
    width: 140px;
    margin: 5px;
    border-radius: 5%;

    position: relative;
}
.card .display-mark {
    position: absolute;
    display: inline-block;
}
.display-mark.top-left{
    top: 0;
    left:0;
}
.display-mark.bottom-right{
    bottom: 0;
    right:0;
    transform: rotate(180deg);
}
.card .display-mark span {
    display: block;
}
</style>
