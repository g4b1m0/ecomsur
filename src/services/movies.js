import axios from 'axios';

const urlDomain = "http://api.themoviedb.org/3";
const language = "es"
const apiKey = "22be462e6d3de1dbab03d1ca50847b5a";

export const movieService = {
    getPopularMoviesById: (currentPage) => axios.get(`${urlDomain}/movie/popular?page=${currentPage}&api_key=${apiKey}`)
        .then(res => {
            const movies = res.data;
            return movies;
        }),
    getById: (movie_id) => axios.get(`${urlDomain}/movie/${movie_id}?api_key=${apiKey}&language=${language}`),
    getRecommendationsById: (movie_id) => axios.get(`${urlDomain}/movie/${movie_id}/recommendations?api_key=${apiKey}`),
    getVideosById: (movie_id) => axios.get(`${urlDomain}/movie/${movie_id}/videos?api_key=${apiKey}`)
}