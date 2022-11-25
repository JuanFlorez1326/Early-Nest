import { PokeApiAdapter, PokiApiFetchAdapter } from '../api/pokeApi.adapter';
import { Move, PokeAPIResponse } from '../interface/pokeapi-response.interface';
import { HttpAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        // Todo: inyectar dependencias
        private readonly http: HttpAdapter
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        // Desestructurar data
        const data = await this.http.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log( data.moves );
        return data.moves;
    }

}

const pokeApiAxios = new PokeApiAdapter();
//const pokeApiFetch = new PokiApiFetchAdapter();


export const charmander = new Pokemon( 4, 'Charmander', pokeApiAxios );
//export const charmander = new Pokemon( 4, 'Charmander', pokeApiFetch );

charmander.getMoves();