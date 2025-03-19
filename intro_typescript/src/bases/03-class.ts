import axios from "axios";
import { PokeApiResponse } from "../interfaces/PokeapiResponse.interface";

class Pokemon{

    get getName(){
        return this.name;
    }

    constructor(public readonly id: number, public readonly name: string  ){
        
    }

    async getMoves(){
        const { data } = await axios.get<PokeApiResponse>('https://pokeapi.co/api/v2/pokemon/10');
        console.log(data.moves[0].move.name.toUpperCase())
        return data.moves
    }
}

export const charmander = new Pokemon(10,'Charmander');

console.log(charmander.getName);