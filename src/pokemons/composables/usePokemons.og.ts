import { computed, onMounted, ref } from 'vue';

import { getPokemons } from '../helpers/get-pokemons';
import type { IPokemon } from '../interfaces/pokemons';


const pokemons  = ref<IPokemon[]>([]);
const isLoading = ref(true);

export const usePokemonsOg = () => {

    onMounted(async() => {
        // await loadPokemons();

        const data = await getPokemons();

        pokemons.value = data
        isLoading.value = false;
    });
    // if (pokemons.value.length === 0) {
    //     getPokemons()
    //         .then(data => {
    //             pokemons.value = data
    //             isLoading.value = false;
    //     });
    // }

    // const loadPokemons = async() => {
    //     const data = await getPokemons();

    //     pokemons.value  = data
    //     isLoading.value = false;
    // }

    return {
        pokemons,
        isLoading,

        count: computed(() => pokemons.value.length)
    }

}

