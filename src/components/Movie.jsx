import { useParams } from "react-router-dom";

const Movie = () => {
    const {id} = useParams()
    return ( 
        <>
            <h1>Movie</h1>
            <h3>Id: {id}</h3>
        </>
     );
}
 
export default Movie;