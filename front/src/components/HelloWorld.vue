<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>HelloWorld</h1>
  <h4>Django Vue Heroku Supabase boilderplate</h4>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
