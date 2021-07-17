import React, { useState, useEffect } from "react";

// CONFIG
import { POSTER_SIZE, BACKDROP_SIZE, BASE_IMAGE_URL } from "../../config";

// components
import HeroImage from "../HeroImage";
import Grid from "../Grid";
import Thumbnail from "../Thumbnail";
import Spinner from "../Spinner";
import SearchBar from "../SearchBar";

//Hook
import { useHomeFetch } from "../../hooks/useHomeFetch";

// Images
import NoImage from "../../images/nathan-dumlao-qDbnNDF2jZ4-unsplash.jpg";


const Home = () => {
    const { state, loading, error, setSearchItem } = useHomeFetch();
    // console.log(state);

    return (
        <React.Fragment>
            {state.results[0] ? (
            <HeroImage 
                image={`${BASE_IMAGE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title={`${state.results[0].original_title}`}
                text={`${state.results[0].overview}`}
            /> 
           ) : null }
           <SearchBar setSearchItem={setSearchItem} />
           <Grid header="Popular Movies">
                {state.results.map(movie => (
                    <Thumbnail
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path ? BASE_IMAGE_URL + POSTER_SIZE + movie.poster_path : NoImage
                        }
                        movieId={movie.id}
                    />
                ))}
           </Grid>
           <Spinner />
        </React.Fragment>
    )
};

export default Home;

