import { MovieItem } from "./MovieItem"

export const MoviesList = ({movies}) => (
    <section>
        <ul>
            {movies.map(movie => <MovieItem id={movie.id} title={movie.title}/>)}
        </ul>
    </section>
)