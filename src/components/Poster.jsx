import { Link } from "react-router-dom";

const Poster = ({movie}) => {

    return ( 
        <div className="overflow-hidden hover:shadow-lg hover:shadow-teal-500">
            <Link to={`/movie/${movie.id}`}>
                <img width={150} className=" max-w-none hover:text-teal-600 hover:scale-110 transition-all duration-500 ease-in-out " src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="image" />

                <div className=" text-small text-center mt-2 font-movie-name font-bold" title={movie.title}> 
                { movie.title.length>20 ? movie.title.slice(0,20)+'...' :movie.title} </div>
            </Link>
        </div>
     );
}
 
export default Poster;