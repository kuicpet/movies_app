import React, { useState, useEffect } from "react";

// CONFIG
import { POSTER_SIZE, BACKDROP_SIZE, BASE_IMAGE_URL } from "../../config";
// components
import HeroImage from "../HeroImage";
import Grid from "../Grid";
//Hook
import { useHomeFetch } from "../../hooks/useHomeFetch";
// Images
import NoImage from "../../images/nathan-dumlao-qDbnNDF2jZ4-unsplash.jpg";


const Home = () => {
    const { state, loading, error } = useHomeFetch();
    console.log(state);

    return (
        <React.Fragment>
            {state.results[0] ? (
            <HeroImage 
                image={`${BASE_IMAGE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title={`${state.results[0].original_title}`}
                text={`${state.results[0].overview}`}
            /> 
           ) : null }
           <Grid header="Popular Movies">
                {state.results.map(movie => (
                    <div key={movie.id}>{movie.title}</div>
                ))}
           </Grid>
        </React.Fragment>
    )
};

export default Home;

