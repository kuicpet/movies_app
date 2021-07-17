import React, { useState, useEffect } from "react";

// CONFIG
import { POSTER_SIZE, BACKDROP_SIZE, BASE_IMAGE_URL } from "../../config";
// components

//Hook
import { useHomeFetch } from "../../hooks/useHomeFetch";
// Images
import NoImage from "../../images/nathan-dumlao-qDbnNDF2jZ4-unsplash.jpg";


const Home = () => {
    const { state, loading, error } = useHomeFetch();
    console.log(state);

    return <div>Home Page</div>
};

export default Home;

