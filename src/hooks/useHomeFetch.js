import { useState, useEffect } from "react";
// API
import API from "../API";

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const useHomeFetch = () => {
    const [searchItem, setSearchItem] = useState("");
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // console.log(searchItem);

    const fetchMovies = async (page, searchItem = "") => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(page, searchItem);
            // console.log(movies);

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

    // console.log(state)

    // Initial render and search
    useEffect(() => {
        setState(initialState);
        fetchMovies(1, searchItem)
    }, [searchItem])

    return { state, loading, error, setSearchItem }

};