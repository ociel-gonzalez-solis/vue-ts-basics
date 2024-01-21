import axios from "axios";
import pokemonApi from "../api/pokemonApi";
import type { IPokemon, IPokemonList, IPokemonRes } from "../interfaces";

export const getPokemons = async (): Promise<IPokemon[]> => {
    const  { data } = await pokemonApi.get<IPokemonList>('/pokemon?limit=145');

    const pokemonsPromises: Promise<IPokemon>[] = [];

    for(const {url} of data.results) {
      const pokemonPromise = axios.get<IPokemonRes>(url).then(({data}) => {
        return {
            id         : data.id,
            name       : data.name,
            frontSprite: data.sprites.front_default
        }
      })
      pokemonsPromises.push(pokemonPromise);
    }
    
    const pokemons = await Promise.all(pokemonsPromises);
    
    return pokemons;
}