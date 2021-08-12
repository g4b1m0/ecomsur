import axios from 'axios';

export const movieService = {
    getAll: () => axios.get(`http://api.themoviedb.org/3/movie/popular?api_key=22be462e6d3de1dbab03d1ca50847b5a`)
        .then(res => {
            const movies = res.data;
            return movies;
        }),
    searchByName: () => axios.get(`http://api.themovied`),
    getById: () => axios.get(`http://api.themovied`),
}