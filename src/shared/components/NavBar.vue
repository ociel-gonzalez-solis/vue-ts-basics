<script setup lang="ts">
import { computed, toRef } from 'vue';
import type { IRouterLink } from '@/router/list-routes'

interface Props {
  title      ?: string
  links       : IRouterLink[]
  isSecondary?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title      : 'CompoApp',
  isSecondary: false
})

// const links = props.links; //Pierde la reactividad
// const links = toRef(props, 'links'); // Opcion #1 que sirve (usar un filtering)

const links = computed(() => props.links.filter(link => link.visible));

</script>

<template>
  <nav>
    <template v-if="!$props.isSecondary">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
      <span>{{ $props.title }}</span>
    </template>
    
    <RouterLink v-for="link in links" :key="link.name" :to="link.path">
      {{ link.title }}
    </RouterLink>
  </nav>
</template>

<style scoped>
nav {
  align-items: center;
  display    : flex;
  font-size  : 12px;
  margin-top : 10px;
  text-align : center;
  width      : 100%;
}

img {
  margin-right: 5px;
}

span {
  margin-right: 10px;
}

nav a.router-link-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display    : inline-block;
  padding    : 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
