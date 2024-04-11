import { useEffect, useState } from "react";
import { MoviesStyleContainer } from "../styles/MoviesContainer";
import { MoviesList } from "../components/MoviesList";
import MoviesService from "../api/MoviesService";

export const MovieView = () => {

    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const { data } = await MoviesService.getMovies();
        setMovies(data.results);
    }

    useEffect(() => {
        fetchMovies();
    }, []);


    return (
        <MoviesStyleContainer>
            <MoviesList movies={movies}/>
        </MoviesStyleContainer>
    )
    
}