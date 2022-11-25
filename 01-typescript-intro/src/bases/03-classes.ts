import axios from 'axios';
import { Move, PokeAPIResponse } from '../interface/pokeapi-response.interface';

export class Pokemon {

    //Getter
    get imageUrl(): string {
        //This hace referencia a la clase.
        return `https://pokemon.com/${this.id}.png`
    }

    //Inicializar valores id y name
    constructor(
        public id: number, 
        public name: string
    ) {}

    //Methods
    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }
    speak() {
        console.log(`${this.name}, ${this.name}`);
    }

    //Metodos Asincronos
    async getMovies(): Promise<Move[]> {
        //Desestructurar data
        const { data } = await axios.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon/4`)
        console.log(data);
        return data.moves;
    }
    
}
export const charmander = new Pokemon(1, 'Charmander');


charmander.getMovies()

//charmander.scream();
//charmander.speak();
//console.log(charmander);
