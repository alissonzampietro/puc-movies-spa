import { useEffect, useState } from "react"
import MoviesService from '../api/MoviesService';
import { useParams } from "react-router-dom";

export const MovieDetailView = () => {
    const {id} = useParams();

    const [movie, setMovie] = useState({})

    const loadMovieDetails = async (id) => {
        const result = await MoviesService.getMovieById(id);
        setMovie(result.data);
    }

    useEffect(() => {
        loadMovieDetails(id);
    })

    return (
        <>
            <h1>{movie.title}</h1>
            <article>{movie.overview}</article>
        </>
    )
}