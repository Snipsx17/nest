import axios from "axios";
import { HttpAdapter } from "../interfaces/HttpAdapter.interface";


export class PokeapiAdapterAxios implements HttpAdapter{
   
    private readonly axios = axios;

    async get<T>( url: string ): Promise<T>{
        const { data } = await this.axios.get<T>(url);
        console.log('implemented with axios');
        return data;
    }

    post( url: string, payload: any ){
        
    }

    update( url: string, payload: any ){
        
    }

    patch( url: string, payload: any ){
        
    }

    delete( url: string ){
        
    }
}

export class PokeapiAdapterFetch implements HttpAdapter{

    async get<T>( url: string ): Promise<T> {
        const resp = await fetch( url );
        const data: T = await resp.json();
        console.log('implemented with fetch');
        return data;
    }

}