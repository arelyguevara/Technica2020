import React from 'react';
import 'index.css';

const Movie = (props) => {
    return(
        <>
        <div className="movie__container">
        <img className="movie__image" src={`img/${props.img}`} alt={props.title} />
        <p>
           {props.title} 
        </p>
        </div>
        </>
    );
}

export default Movie;