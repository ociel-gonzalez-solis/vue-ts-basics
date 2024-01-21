<script setup lang="ts">
import { ref } from 'vue';
import { getPokemons } from '../helpers/get-pokemons';
import type { IPokemon } from '../interfaces/pokemons';

// const data = await getPokemons();
const pokemons = ref<IPokemon[]>(); // o sin data
getPokemons().then(
    data => pokemons.value = data
);
</script>

<template>
  <div>
    <h1>Pokemon List</h1>
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
