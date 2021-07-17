import React, { useState, useEffect } from "react";

// CONFIG
import { POSTER_SIZE, BACKDROP_SIZE, BASE_IMAGE_URL } from "../config";

// components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumbnail from "./Thumbnail";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";

//Hook
import { useHomeFetch } from "../hooks/useHomeFetch";

// Images
import NoImage from "../images/nathan-dumlao-qDbnNDF2jZ4-unsplash.jpg";


const Home = () => {
    const { state, loading, error, setSearchItem, searchItem, setIsLoadingMore } = useHomeFetch();
    // console.log(state);

    if(error) return <div>Something went wrong ...</div>

    return (
        <React.Fragment>
            {!searchItem &&  state.results[0] ? (
            <HeroImage 
                image={`${BASE_IMAGE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title={`${state.results[0].original_title}`}
                text={`${state.results[0].overview}`}
            /> 
           ) : null }
           <SearchBar setSearchItem={setSearchItem} />
           <Grid header={searchItem ? "Search Results":"Popular Movies"}>
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
           {loading && <Spinner />}
           {state.page < state.total_pages && !loading && (
               <Button text="Load more" callback={() => setIsLoadingMore(true)} />
           )}
        </React.Fragment>
    )
};

export default Home;

