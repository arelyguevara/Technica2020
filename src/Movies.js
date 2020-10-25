import React from 'react';
import movies from 'movies.json';

const Movie = () => {
    {movies.map((movies) => {
    <p>{movies.title}</p>
    
    })}
}

export default Movie;