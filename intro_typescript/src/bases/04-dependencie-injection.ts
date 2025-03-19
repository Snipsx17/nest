import axios from 'axios';
import { Move, PokeApiResponse } from '../interfaces/PokeapiResponse.interface';
import { PokeapiAdapterAxios, PokeapiAdapterFetch } from '../api/Pokeapi.adapter';
import { HttpAdapter } from '../interfaces/HttpAdapter.interface';


export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        private readonly http: HttpAdapter

    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves() {
        const data = await this.http.get<PokeApiResponse>('https://pokeapi.co/api/v2/pokemon/10');
        console.log( data.moves[0].move.name );
        
        return data.moves;
    }

}

// const apiAdapter = new PokeapiAdapter();

export const charmander = new Pokemon( 4, 'Charmander', new PokeapiAdapterAxios() );
export const charmander2 = new Pokemon( 4, 'Charmander', new PokeapiAdapterFetch() );

charmander.getMoves();
charmander2.getMoves();