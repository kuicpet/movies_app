import { useState, useEffect } from "react";
// API
import API from "../API";
// sessionStorage
import { persistedState } from "../helpers";

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
    const [isLoadingMore, setIsLoadingMore] = useState(false);

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
        
        if(!searchItem){
            const sessionState = persistedState("homeState");

            if(sessionState){
                console.log("fetching from session storage")
                setState(sessionState);
                return;
            }
        }

        console.log("fetching frm api");
        setState(initialState);
        fetchMovies(1, searchItem)
    }, [searchItem])

    // Load more
    useEffect(() => {
        if(!isLoadingMore) return;

        fetchMovies(state.page = state.page + 1, searchItem)
        setIsLoadingMore(false);

    }, [isLoadingMore, searchItem, state]);

    // Save to session storage
    useEffect(() => {
       if(!searchItem) sessionStorage.setItem("homeState",  JSON.stringify(state))
    }, [searchItem, state ]);

    return { state, loading, error, setSearchItem, searchItem, setIsLoadingMore }

};