<template lang="html">
  <div class="form-group">
    <v-text-field
      label="Todo"
      placeholder="What do you have to do?"
      solo
      v-model="title"
    />
    <v-btn
      class="add-btn"
      @click="newTodo"
      large
      :disabled="!this.title"
      color="primary"
    >
      Add
    </v-btn>
  </div>
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
      this.title = ''
    },
  },
}
</script>

<style lang="css">
.form-group {
  display: flex;
}
.v-text-field {
  width: 90%;
}
.add-btn {
  width: 10%;
}
</style>
