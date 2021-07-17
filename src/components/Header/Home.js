import React, { useState, useEffect } from "react";
// API
import API from "../../API";
// CONFIG
import { POSTER_SIZE, BACKDROP_SIZE, BASE_IMAGE_URL } from "../../config";
// components

//Hook

// Images
import NoImage from "../../images/nathan-dumlao-qDbnNDF2jZ4-unsplash.jpg";


const Home = () => {
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (page, searchItem = "") => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(page, searchItem);
            console.log(movies);

            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))

        } catch (error) {
            setError(true)
        }

        setLoading(false);
    };

    // Initial render
    useEffect(() => {
        fetchMovies(1)
    }, [])

    return <div>Home Page</div>
};

export default Home;

