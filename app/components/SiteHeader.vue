<template>
  <UHeader>
    <template #title>
      <Logo class="h-6 w-auto" />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
    active: route.path === '/'
  },
  {
    label: 'About',
    to: '/about',
    active: route.path.startsWith('/about')
  },
  {
    label: 'Test',
    to: '/test',
    active: route.path.startsWith('/test')
  },
  {
    label: 'External Link in Self',
    to: 'https://www.google.com',
    target: '_self'
  },
  {
    label: 'External Link in _blank',
    to: 'https://www.google.com',
    target: '_blank'
  }
])
</script>

