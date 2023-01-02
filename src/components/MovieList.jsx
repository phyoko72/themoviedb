import React, { useState, useEffect } from 'react';
import Poster from './Poster';

const MovieList = ({type}) => {
    const [movies, setMovies] = useState([]);

    const upcomingList = `https://api.themoviedb.org/3/movie/${type}?api_key=041b78259461fd4d77cb919edc543a71`;

    const getList = async()=>{
        try {
            const res = await fetch(upcomingList)
            const data = await res.json()
            const lists = data.results

            setMovies(lists)

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        getList()
    },[])



    return ( 
        <>        
            <h1 className=' text-lg capitalize font-bold'>
                {type}
            </h1>
            <ul className=' flex overflow-x-auto gap-3'>
                {movies && movies.map(movie=>(
                    <li className='p-2' key={movie.id}>
                        <Poster movie={movie}/>
                    </li>
                ))}
            </ul>
        </>
     );
}
 
export default MovieList;