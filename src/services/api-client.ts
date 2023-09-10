import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '2d0d036223324c9aa53174bd8b0bbdd7'
    }
})