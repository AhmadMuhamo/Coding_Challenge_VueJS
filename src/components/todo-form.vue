<template lang="html">
  <v-text-field
    label="Todo"
    placeholder="What do you have to do?"
    solo
    v-model="title"
    @change="newTodo"
  />
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      title: null,
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    newTodo() {
      const id = new Date().getUTCMilliseconds()
      const todo = {
        id,
        title: this.title,
        completed: false,
      }
      this.addTodo(todo)
    },
  },
}
</script>

<style lang="css"></style>
