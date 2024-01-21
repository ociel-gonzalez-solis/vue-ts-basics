<script setup lang="ts">
import type { IPokemon } from '../interfaces/pokemons'
import PokemonCard from './PokemonCard.vue';

interface Props {
  pokemons: IPokemon[]
}

defineProps<Props>();

</script>

<template>
  <div class="card-list">
    <PokemonCard
        v-for="pokemon in $props.pokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
    />
  </div>
</template>

<style scoped>
.card-list {
    display       : flex;
    flex-direction: row;
    flex-wrap     : wrap;
}
</style>
