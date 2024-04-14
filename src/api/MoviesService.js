import axios from "axios";

const API_KEY = '47211058bd7df482efbdf0320c135d57';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export default class MoviesService {
    static getMovies() {
        return axios(withBaseUrl('movie/popular'));
    }

    static getMovieById(id) {
        return axios(withBaseUrl(`movie/${id}`));
    }
}