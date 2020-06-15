export default {
  state: {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
  },
  getters: {
    todos(state) {
      return state.todos
    },
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    REMOVE_TODO(state, todoID) {
      const newTodos = state.todos.filter((todo) => todo.id != todoID)
      state.todos = newTodos
      localStorage.setItem('todos', JSON.stringify(newTodos))
    },
    CHANGE_TODO_STATUS(state, todoID) {
      const newTodos = state.todos.map((todo) => {
        if (todo.id == todoID) {
          todo.completed = !todo.completed
        }
        return todo
      })
      state.todos = newTodos
      localStorage.setItem('todos', JSON.stringify(newTodos))
    },
  },
  actions: {
    /**
     *
     * @param {Object} todo - The todo item to add
     */
    addTodo({ commit }, todo) {
      commit('ADD_TODO', todo)
    },

    /**
     *
     * @param {Number} todoID - The todo item id for deletion
     */
    removeTodo({ commit }, todoID) {
      commit('REMOVE_TODO', todoID)
    },
    
    /**
     *
     * @param {Number} todoID - The todo item id for updating its status
     */
    changeTodoStatus({ commit }, todoID) {
      commit('CHANGE_TODO_STATUS', todoID)
    },
  },
}
