import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Casts from "./Casts";
import style from "./movie.module.css"
import Preview from "./Preview";

const Movie = () => {

    const {movieId} = useParams();

    const viteEnv = import.meta.env.VITE_API_KEY

    const [movie, setMovie] = useState([]);

    const upcomingList = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${viteEnv}`;

    const getDetail = async()=>{
        try {
            const res = await fetch(upcomingList)
            const data = await res.json()
            setMovie(data)

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        getDetail()
    },[])

    return ( 
        <div className=" bg-orange-400 w-full h-full relative">

            <div className={style.content}>

                <div className="">
                    <Link to={'/'} className=" bg-red-600 text-white px-2 py-1 rounded-md mb-2 inline-block">HOME</Link>
                    
                    {movie.poster_path && 
                    <img className={style.movie} width={150} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="image" /> }

                    <h1 className=" text-2xl font-bold font-movie-name mb-2">{movie.original_title}</h1>          

                    <Casts movieId={movieId} />
                    <Preview movieId={movieId}/>
                </div>
     
            </div>

            <div className={style.bg}>
                {   movie.backdrop_path && 
                    <img className={style.backdrop} width={150}  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="backdrop" />
                }              
            </div>

            

            

        </div>
     );
}
 
export default Movie;