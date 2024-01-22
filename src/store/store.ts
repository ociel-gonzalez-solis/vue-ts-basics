// import { getPokemons } from "@/pokemons/helpers/get-pokemons"
import type { IPokemon } from "@/pokemons/interfaces"
import { reactive } from "vue"

interface Store {
    pokemons: {
        list         : IPokemon[],
        count        : number,
        isLoading    : boolean,
        hasError     : boolean,
        errorMessage?: string
    }

    startLoadingPokemons: () => Promise<void>,
    loadedPokemons      : (data: IPokemon[]) => void,
    loadPokemonsFailed  : (error: string) => void
}


const store = reactive<Store>({
    pokemons: {
        list        : [],
        count       : 0,
        isLoading   : false,
        hasError    : false,
        errorMessage: undefined
    },
    startLoadingPokemons: async function (): Promise<void> {
        // const pokemons = await getPokemons();
        // this.loadedPokemons(pokemons);

        this.pokemons = {
            ...this.pokemons,
            isLoading   : true,
            hasError    : false,
            errorMessage: undefined
        }
    },
    loadedPokemons: function (data: IPokemon[]): void {
        this.pokemons = {
            list        : data,
            count       : data.length,
            isLoading   : false,
            hasError    : false,
            errorMessage: undefined
        }
        console.log(this.pokemons.list);
    },
    loadPokemonsFailed: function (error: string): void {
        this.pokemons = {
            ...this.pokemons,
            isLoading   : false,
            hasError    : true,
            errorMessage: error
        }
    }
});

// store.startLoadingPokemons();

export default store;