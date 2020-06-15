<template lang="html">
  <div>
    <TodoItem
      v-for="todo in uncompletedTodos"
      :key="todo.id"
      :todo="todo"
      class="mb-3"
    />
    <h2 v-if="!todos.length">Add Some Todos!</h2>
    <h3 
      v-if="completedTodos.length" 
      @click="viewCompleted = !viewCompleted">{{ viewCompleted ? 'Hide' : 'Show' }} Completed Todos</h3>
    <div :class="{hidden: !viewCompleted}">
      <TodoItem
        v-for="todo in completedTodos"
        :key="todo.id"
        :todo="todo"
        class="mb-3"
      />
    </div>
    
  </div>
</template>

<script>
import TodoItem from '@/components/todo-item'
import { mapGetters } from 'vuex'

export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      viewCompleted: false
    }
  },
  computed: {
    ...mapGetters(['todos']),
    uncompletedTodos() {
      return this.todos.filter((todo) => !todo.completed)
    },
    completedTodos() {
      return this.todos.filter((todo) => todo.completed)
    },
  },
}
</script>

<style lang="css" scoped>
h2,h3 {
  text-align: center;
}
h3 {
  color: green;
  margin: 1rem auto;
  cursor: pointer;
}
.hidden {
  display: none;
}
</style>
