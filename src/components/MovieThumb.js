import React from 'react';
import {StyledMovieThumb} from "../components/styles/StyledMovieThumb";
const MovieThumb = ({image,movieId,chlickable}) => {
    return (
        <StyledMovieThumb>
            {
                chlickable?(
                        <img  className="clickable" src={image} alt="moveithumb"/>
                ):( <img   src={image} alt="moveithumb"/>)
            }
        </StyledMovieThumb>
    );
};

export default MovieThumb;