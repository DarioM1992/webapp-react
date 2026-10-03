import './Homepage.css';
import { useEffect, useState } from "react";
import axios from 'axios';

const MovieCard = props => (
<div className="movie-card">
    {props.movie.title}
</div>
);



export const Homepage = () => {
  const [movies,setMovies] =  useState([]);

useEffect(() => {
    console.log('movie index effect')
    axios.get("http://localhost:3000/movies")
    .then(res => setMovies(res.data))
    .catch(err => console.error('movie index' ,err));
 }, []);

return(
    <div className="homepage container">
        <h1>Best Movies of all time</h1>
        <p className='subtitle'>The nerdest movie community </p>
        <div className="movies-grid">
        {movies.map( movie => <MovieCard movie={movie}/>)}
        </div>
    </div>
)};