import axios from 'axios'

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    params: {
        api_key: '15484acf0aea80dbe5b18bdc93da85fb',
        language:'pt-BR',
        page:'1'
    }
})

export default api