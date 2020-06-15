export default {
  state: {
    todos: [],
  },
  getters: {
    todos(state) {
      return state.todos
    },
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo)
    },
    REMOVE_TODO(state, todo) {
      const newTodos = state.todos.splice(state.todos.indexOf(todo), 1)
      state.todos = newTodos
    },
    CHANGE_TODO_STATE(state, todoID) {
      state.todos[todoID].completed = !state.todos[todoID].completed
    },
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('ADD_TODO', todo)
    },
    removeTodo({ commit }, todo) {
      commit('REMOVE_TODO', todo)
    },
  },
}
