<!-- ./components/SiteHeader.vue -->
<script setup lang="ts">
</script>
<template>
  <header>
    <NuxtLink to="/">
        <div>Home</div>
    </NuxtLink>
    <NuxtLink to="/about">
      <div>About</div>
    </NuxtLink>
    <NuxtLink to="/test">
        <div>Test</div>
    </NuxtLink>
    <NuxtLink to="https://www.baidu.com">
      <div>External Link</div>
    </NuxtLink>
  </header>
</template>
