<script setup lang="ts">
import { useRoute } from 'vue-router'
import { usePokemon } from '../composables/usePokemon';
import { useQueryClient } from '@tanstack/vue-query';

const queryClient = useQueryClient()
const route       = useRoute()
const { id }      = route.params;

const { isLoading, pokemon, isError, error } = usePokemon(`${id}`);

const invalidQueries = () => {
  queryClient.invalidateQueries(
  //   {
  //   queryKey: ['pokemons', `${id}`]
  // }
  );
}

</script>

<template>
  <button @click="invalidQueries">Invalid Queries</button>

  <h1 v-if="isLoading">IS LOADING</h1>
  
  <div v-else-if="isError">
    {{ error }}
  </div>

  <div v-else-if="pokemon">
    <h1>{{ pokemon.name }}</h1>
    <div class="character-container">
        <img :src="pokemon.frontSprite" :alt="pokemon.name">
    </div>
  </div>
</template>

<style scoped>
    .character-container{
        display       : flex;
        flex-direction: row;
    }

    img {
        width        : 150px;
        border-radius: 5px;
    }
</style>
