import todoList from './store/todo-list.js'
import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    todoList
  }
});
export default store;