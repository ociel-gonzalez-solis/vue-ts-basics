<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import PokemonCardList from '../components/PokemonCardList.vue'
import store from '@/store/store'
import { getPokemons } from '../helpers/get-pokemons'

// const pokemonStore = store;

// store.loadedPokemons([]);

// store.startLoadingPokemons();

useQuery({
  queryKey: ['pokemons'],
  queryFn : getPokemons,
  select(data) {
    console.log(data)
    store.loadedPokemons(data);
  }
})
</script>

<template>
  <h1 v-if="store.pokemons.isLoading">IS LOADING</h1>

  <div v-else-if="store.pokemons.hasError">
    {{ store.pokemons.errorMessage }}
  </div>

  <div v-else>
    <h1>Pokemon List Native - ({{ store.pokemons.count }})</h1>

    <PokemonCardList :pokemons="store.pokemons.list ?? []" />
  </div>
</template>

<style scoped></style>
