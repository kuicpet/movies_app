import React from "react";
import { useParams } from "react-router-dom";

//CONFIG
import { BASE_IMAGE_URL, POSTER_SIZE } from "../config"

//components
import BreadCrumb from "./BreadCrumb";
import Grid from "./Grid";
import Spinner from "./Spinner";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";

//hook
import { useMovieFetch } from "../hooks/useMovieFetch";

//Image
import NoImage from "../images/nathan-dumlao-qDbnNDF2jZ4-unsplash.jpg";

const Movie = () => {
    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);
    //console.log(movie);

    if(loading) return <Spinner/>
    if(error) return <div>Something went wrong ...</div>

    return (
        <React.Fragment>
           <BreadCrumb movieTitle={movie.original_title} />
           <MovieInfo movie={movie} />
           <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
           <Grid header="Actors">
                {movie.actors.map((actor) => (
                    <Actor 
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path ?
                            `${BASE_IMAGE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage
                            
                        }
                    />
                    ))}
           </Grid>
        </React.Fragment>
    )
}

export default Movie;