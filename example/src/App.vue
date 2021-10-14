<template>
  <div class="container">{{ name }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const name = ref('vue-package')
    return {
      name
    }
  }
})
</script>
