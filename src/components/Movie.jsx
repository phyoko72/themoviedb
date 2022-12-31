import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {

    const {movieId} = useParams();

    const [movie, setMovie] = useState([]);

    const upcomingList = `https://api.themoviedb.org/3/movie/${movieId}?api_key=041b78259461fd4d77cb919edc543a71`;

    const getDetail = async()=>{
        try {

            const res = await fetch(upcomingList)
            const data = await res.json()

            console.log('Movie Data: ',data);
            setMovie(data)

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        getDetail()
    },[])

    return ( 
        <>
            <h1>Movie</h1>
            <img width={150} className=" max-w-none " src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="image" />
            <h3>{movie.original_title}</h3>

        </>
     );
}
 
export default Movie;