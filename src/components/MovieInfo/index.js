import React from "react";
//components
import Thumbnail from "../Thumbnail";

import { BASE_IMAGE_URL, POSTER_SIZE } from "../../config";

import NoImage from "../../images/nathan-dumlao-qDbnNDF2jZ4-unsplash.jpg";
//styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";

const MovieInfo = ({ movie }) => (
    
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumbnail 
                image={
                    movie.poster_path ?
                    `${BASE_IMAGE_URL}${POSTER_SIZE}${movie.poster_path}`
                    : NoImage
                }
                clickable={false}
            />
            <Text>
                <h1>{movie.title}</h1>
                <h3>PLOT</h3>
                <p>{movie.overview}</p>

                <div className="rating-directors">
                    <div>
                        <h3>RATING</h3>
                        <div className="score">
                            {movie.vote_average}
                        </div>
                        <div className="director">
                        
                        </div>
                    </div>
                </div>
            </Text>
        </Content>
    </Wrapper>
);

export default MovieInfo;