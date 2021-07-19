// Configuration  

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_API_KEY || "41db04c9bb3397465762cd47966fed07";


const SEARCH_BASE_URL = `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US`;
const POPULAR_BASE_URL = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US`;

// For Login and Voting
const REQUEST_TOKEN_URL = `${API_URL}/authentication/token/new?api_key=${API_KEY}`;
const LOGIN_URL = `${API_URL}/authentication/token/validate_with_login/new?api_key=${API_KEY}`
const SESSION_ID_URL = `${API_URL}/authentication/session/new?api_key=${API_KEY}`

// Image url
const BASE_IMAGE_URL = `http://image.tmdb.org/t/p/`

// BackDrop Image size
const BACKDROP_SIZE = `w1280`

// Poster Image size
const POSTER_SIZE = `w780`

export {
    API_KEY,
    API_URL,
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    REQUEST_TOKEN_URL,
    LOGIN_URL,
    SESSION_ID_URL,
    BASE_IMAGE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE
}