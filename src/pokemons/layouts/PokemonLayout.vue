<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue';
import type { IRouterLink } from '@/router/list-routes';
import { pokemonRoute } from '../router';

const routeLinks: IRouterLink[] =
  pokemonRoute.children?.map(({name, path, props}) => {
    return {
      name : name?.toString() ?? '',
      path : path,
      title: (props as {title: string}).title,
    }
  }) || [];
</script>

<template>
  <NavBar :links="routeLinks" isSecondary />
  <div>
    <!-- <h4>Pokemon Layout</h4> -->
    <!-- <Suspense> -->
      <RouterView />
      <!-- <template #fallback>
        Loading...
      </template> -->
    <!-- </Suspense> -->
  </div>
</template>

<style scoped></style>
