import { useState, useEffect } from "react";
import API from "../API";
// helpers
import { persistedState } from "../helpers";

export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true);
                setError(false);

                let movie = await API.fetchMovie(movieId);
                let credits = await API.fetchCredits(movieId);

                // get directors only
                const directors = credits.crew.filter(
                    member => member.job === "Director"
                );
                
                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                })

                setLoading(false);

            } catch (error) {
                setError(true)
            }
        }

        /*const sessionState = persistedState(movieId);
        if(sessionState){
            setState(sessionState);
            setLoading(false);
            return;
        }*/

        fetchData();
    }, [movieId])

    // save to session storage
    /*useEffect(() => {
        sessionStorage.setItem(movieId, JSON.stringify(state))
    }, [movieId, state])*/
    return { state , loading, error }
}