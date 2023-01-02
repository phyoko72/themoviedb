import MovieList from "./components/MovieList";

const Home = () => {
    return ( 
        <>
            <h1 className=" text-4xl font-bold text-center">Movies</h1>
            
            <MovieList type={'upcoming'}/>
            <MovieList type={'popular'}/>
        </>
     );
}
 
export default Home;