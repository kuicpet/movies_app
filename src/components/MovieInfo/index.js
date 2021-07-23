import React, { useContext } from "react";
import API from '../../API';
import PropTypes from "prop-types";
//components
import Thumbnail from "../Thumbnail";
import Rate from "../Rate";

import { BASE_IMAGE_URL, POSTER_SIZE } from "../../config";

import NoImage from "../../images/nathan-dumlao-qDbnNDF2jZ4-unsplash.jpg";
//styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";
// context
import { Context } from "../../context";


const MovieInfo = ({ movie }) => {
    const [user] = useContext(Context);

    const handleRating = async (value) => {
        const rate = await  API.rateMovie();
        console.log(rate)
    }
   return ( <Wrapper backdrop={movie.backdrop_path}>
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
                            <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
                            {movie.directors.map((director) => (
                                <p key={director.credit_id}>{director.name}</p>
                            ))}
                        </div>
                    </div>
                    {user && (
                        <div>
                        <p>Rate Video</p>
                        <Rate callback={handleRating}/>
                    </div>
                    )}
                </div>
            </Text>
        </Content>
    </Wrapper>
   );
};

MovieInfo.propTypes = {
    movie: PropTypes.object
}

export default MovieInfo;