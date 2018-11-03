<template>
  <div id="app">
    <div v-for="todo in todoList" :key="todo.id" >
      {{todo.title}}
    </div>
  </div>
</template>

<script>
import {todo} from '@/store/class/todo.js'
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created: function(){
    const mytodo1 = new todo(1, 'サンプル', '20180101', 'シャンプーを買う');
    const mytodo2 = new todo(2, 'サンプル2', '20180101', 'シャンプーを買う');

    this.$store.commit('addTodo', mytodo1);
        this.$store.commit('addTodo', mytodo2);
  },
  computed: {
    todoList(){ return this.$store.getters.todoList}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
