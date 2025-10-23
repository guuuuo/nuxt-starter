<!-- ./pages/index.vue -->
<template>
  <div class="home-page">
    <h1>Welcome</h1>
  </div>
</template>

<script setup>
import { useBFCache } from '~/composables/useBFCache';

useBFCache(() => {
  console.log('useBFCache executed.');
});

onBeforeMount(async () => {
  console.log('onBeforeMount() executed.');
});

onMounted(async () => {
  console.log('onMounted() executed.');
});
</script>

<style scoped>
.home-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
</style>