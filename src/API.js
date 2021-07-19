import {
    API_KEY,
    API_URL,
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    REQUEST_TOKEN_URL,
} from "./config";


/*const defaultConfig = {
    method: "POST",
    headers: {
        "Content-Type" : "application/json"
    },
};*/

const feching = {
    // Fetch Movies
    fetchMovies: async ( searchItem, page ) => {
        const endPoint = searchItem
        ? `${SEARCH_BASE_URL}${searchItem}&page=${page}`
        : `${POPULAR_BASE_URL}&page=${page}`;
        return await (await fetch(endPoint)).json();
    },
    // Fetch single Movie
    fetchMovie: async (movieId) => {
        const endPoint = `${API_URL}/movie/${movieId}?api_key=${API_KEY}`;
        return await (await fetch(endPoint)).json();
    },
    // Fetch credits
    fetchCredits: async (movieId) => {
        const creditsEndpoint = `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
        return await (await fetch(creditsEndpoint)).json();
    },
    // Get token
    getTokenRequest: async () => {
        const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
        return reqToken.request_token;
    }
}

export default feching;