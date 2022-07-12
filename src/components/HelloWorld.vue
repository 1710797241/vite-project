<script setup>
import { onMounted, ref } from 'vue'

defineProps({
  msg: String
})

onMounted(()=>{
  console.log('onMounted');
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
