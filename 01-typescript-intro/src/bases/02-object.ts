export const pokemonIds: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
pokemonIds.push( +'1' );
console.log('pokemonIds', pokemonIds);

export interface Pokemon {
    id: number,
    name: string,
    age?: number
}

export const pokemon: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
}
console.log('Pokemon', pokemon);

export const pokemons: Pokemon[] = [];
pokemons.push( pokemon );