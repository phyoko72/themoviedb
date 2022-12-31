import React, { useState, useEffect } from 'react';

const GetMovie = () => {

    const [movies, setMovies] = useState({});

    // const upcomingList = `https://api.themoviedb.org/3/movie/${type}?api_key=041b78259461fd4d77cb919edc543a71`;

    // const getList = async()=>{
    //     try {
    //         const res = await fetch(upcomingList)
    //         const data = await res.json()
    //         const lists = data.results
    //         console.log(lists);
    //         setMovies(lists)

    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    useEffect(()=>{
        // getList()
        setMovies({
            id: 740952,
            original_language:"en",
            original_title:"Savage Salvation",
            poster_path:"/fJRt3mmZEvf8gQzoNLzjPtWpc9o.jpg",
            release_date:"2022-12-02",
            title:"Savage Salvation"
        })
    },[])

    return {movies,setMovies};
}
 
export default GetMovie;