<template lang="html">
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ todo.title }}</h3>
      </div>
    </v-card-title>
    <v-btn>
      Complete
    </v-btn>
    <v-btn 
      color="error">
      Delete
    </v-btn>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['removeTodo'])
  }
}
</script>

<style lang="css">
</style>
