<!-- ./pages/index.vue -->
<template>
  <div>
    <header class="site-section">
      <h1>
        Test.
      </h1>
    </header>
  </div>
</template>

<script setup>
onMounted(async () => {
  test();
});

function test() {
  console.log('test');
}

function test2() {
  console.log('test2');
}
</script>
