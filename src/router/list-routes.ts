export interface IRouterLink {
    name : string;
    path : string;
    title: string;
}

export const routerLinks: IRouterLink[] = [
    { path: '/', name: 'home', title: 'Home' },
    { path: '/about', name: 'about', title: 'About' },
    { path: '/counter', name: 'counter', title: 'Counter' },
    { path: '/pokemons', name: 'pokemons', title: 'Pokemons' }
]