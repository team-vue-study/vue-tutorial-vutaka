import todo from './class/todo.js'

export default {
  state() {
    return {
      todoList: new Array()
    }
  },
  getters: {
    todoList: state => state.todoList
  },
  mutations: {
    addTodo(state, payload) {
      state.todoList.push(payload);
    }
  },
  actions: {
    doAddTodo({commit}, todo) {
      // TODO: ここでtodo.idの採番を行えるようにする？
      commit('addTodo', {todo});
    }

  }
}