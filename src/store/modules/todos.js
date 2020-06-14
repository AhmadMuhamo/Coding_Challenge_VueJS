export default {
  state: {
    todos: {},
  },
  getters: {
    todos(state) {
      return state.todos
    },
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos[todo.id] = todo
    },
    REMOVE_TODO(state, todoID) {
      delete state.todos[todoID]
    },
    CHANGE_TODO_STATE(state, todoID) {
      state.todos[todoID].completed = !state.todos[todoID].completed
    },
  },
  actions: {},
}
