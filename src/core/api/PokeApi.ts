import axios from "axios";

const PokeApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export default PokeApi;