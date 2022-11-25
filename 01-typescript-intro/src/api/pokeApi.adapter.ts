import axios from "axios";

export class PokiApiFetchAdapter {
    async get <T>(url: string): Promise<T> {
        const resp = await fetch(url);
        const data = await resp.json();
        console.log('Con Fetch');
        return data;
    }
}

export interface HttpAdapter {
    get<T>(url: string): Promise<T>;
}

export class PokeApiAdapter implements HttpAdapter {

    private readonly axios = axios;

    async get<T> (url: string): Promise<T> {
        console.log('Con Axios');
        const { data } = await this.axios.get<T>(url);
        return data;
    }
}