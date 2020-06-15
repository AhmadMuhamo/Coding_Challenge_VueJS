<template lang="html">
  <div v-if="todos.length">
    <TodoItem 
      v-for="todo in todos" 
      :key="todo.id"
      :todo="todo" 
      class="mb-3" />
  </div>
</template>

<script>
import TodoItem from '@/components/todo-item';
import { mapGetters } from 'vuex';

export default {
  components: {
    TodoItem,
  },
  computed: {
    ...mapGetters(['todos'])
  }
}
</script>

<style lang="css">
</style>
