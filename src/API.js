import {
    API_KEY,
    API_URL,
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    REQUEST_TOKEN_URL,
    LOGIN_URL,
    SESSION_ID_URL,
} from "./config";


const defaultConfig = {
    method: "POST",
    headers: {
        "Content-Type" : "application/json"
    },
};

const apiSettings = {
    // Fetch Movies
    fetchMovies: async ( page, searchItem) => {
        const endPoint = searchItem
        ? `${SEARCH_BASE_URL}&query=${searchItem}&page=${page}`
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
    },
    authenticate: async (requestToken, username, password) => {
        const bodyData = {
            username,
            password,
            request_token : requestToken
        }
        // authenticate the request token
        const data = await (await fetch(LOGIN_URL, {
            ...defaultConfig,
            body : JSON.stringify(bodyData)
        })).json();
        if(data.success){
            const sessionId = await (await fetch(SESSION_ID_URL, {
                ...defaultConfig,
                body: JSON.stringify({ request_token : requestToken })
            })).json();
            return sessionId;
        }

    }, 
    rateMovie: async (sessionId, movieId, value) => {
        const endpoint = `${API_URL}/movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`
        const rating = await(await fetch(endpoint, {
            ...defaultConfig,
            body: JSON.stringify({ value })
        })).json();
        return rating;
    }
}

export default apiSettings;