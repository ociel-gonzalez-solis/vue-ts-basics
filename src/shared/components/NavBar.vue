<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <span>CompoApp</span>

    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/counter">Counter</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  width     : 100%;
  font-size : 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
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
