import { computed, watchEffect } from 'vue';

import { useQuery } from '@tanstack/vue-query';

import { getPokemons } from '../helpers/get-pokemons';
import { initialPokemons } from '../data/initial-pokemons';

export const usePokemons = () => {
    const { isLoading, data: pokemons, isError, error } = useQuery({
        queryKey  : ['pokemons'],
        queryFn   : getPokemons,
        // retry     : 1,
        // retryDelay: 1000
        initialData: initialPokemons
    })

    watchEffect(() => {
        console.log('isLoading', isLoading.value);
    })

    return {
        pokemons,
        isLoading,
        isError,
        error,

        count: computed(() => pokemons.value?.length ?? 0)
    }

}


