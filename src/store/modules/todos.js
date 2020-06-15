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
    REMOVE_TODO(state, todoID) {
      const newTodos = state.todos.filter( todo => todo.id != todoID)
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
