import type { RouteRecordRaw } from 'vue-router';

const ROUTE_NAME = 'pokemons';

export const pokemonRoute: RouteRecordRaw = {
    path     : `/${ROUTE_NAME}`,
    redirect : `/${ROUTE_NAME}/list`,
    component: () => import('@/pokemons/layouts/PokemonLayout.vue'),
    children : [
        {
            path     : `/${ROUTE_NAME}/by/:id`,
            name     : 'pokemon-id',
            props    : {title: 'Pokemon por Id', visible: false },
            component: () => import('@/pokemons/pages/PokemonById.vue')
        },
        {
            path     : `/${ROUTE_NAME}/list`,
            name     : 'pokemon-list',
            props    : {title: 'Listado', visible: true },
            component: () => import('@/pokemons/pages/PokemonList.vue')
        },
        {
            path     : `/${ROUTE_NAME}/list-native`,
            name     : 'pokemon-list-native',
            props    : {title: 'Listado Nativo', visible: true },
            component: () => import('@/pokemons/pages/PokemonList.native.vue')
        },
        {
            path     : `/${ROUTE_NAME}/search`,
            name     : 'pokemon-search',
            props    : {title: 'Busqueda', visible: true },
            component: () => import('@/pokemons/pages/PokemonSearch.vue')
        },
    ]
}

