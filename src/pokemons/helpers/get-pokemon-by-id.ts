import pokemonApi from "../api/pokemonApi";
import type { IPokemon, IPokemonRes } from "../interfaces";

export const getPokemonById = async (id: string): Promise<IPokemon> => {

    const { data } = await pokemonApi.get<IPokemonRes>(`/pokemon/${id}`);

    return {
        id         : data.id,
        name       : data.name,
        frontSprite: data.sprites.front_default
    };
}