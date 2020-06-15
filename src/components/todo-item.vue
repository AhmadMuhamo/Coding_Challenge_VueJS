<template lang="html">
  <v-card :color="todo.completed ? '#2ecc71' : ''">
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ todo.title }}</h3>
      </div>
    </v-card-title>
    <div class="card-btns">
      <v-btn
        @click="changeTodoStatus(todo.id)"
        :color="todo.completed ? 'warning' : '#2ecc71'"
      >
        {{ todo.completed ? 'Incomplete' : 'Complete' }}
      </v-btn>
      <v-btn 
        @click="removeTodo(todo.id)" 
        color="error">
        Delete
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(['removeTodo', 'changeTodoStatus']),
  },
}
</script>

<style lang="css">
.card-btns {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-btns button {
  width: 45%;
}
</style>
