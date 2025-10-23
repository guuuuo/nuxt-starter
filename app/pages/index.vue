<!-- ./pages/index.vue -->
<template>
  <HelloWorld/>
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