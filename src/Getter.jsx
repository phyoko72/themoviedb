import { useState,useEffect } from "react";
import GetMovie from "./components/GetMovie";

const Getter = () => {
    const {movies,setMovies} = GetMovie
    console.log('Movie: ',movies);

    // useEffect(()=>{
    //     console.log('Inside Use Effect');
    //     setMovies({
    //         ...movies,
    //         new: 'Hello World'
    //     })
    // },[])

    const [input, setInput] = useState('');

    const setting = () => {
        setMovies({
            ...movies,
            new: input
        })
        console.log('setting function: ',movies);
    }

    const handleInput = e => {
        setInput(e.target.value)
    }
    console.log('input: ',input);


    return ( 
        <>
            <h1>Getter Page</h1>
            <input 
                type="text" 
                name="input" 
                id="" 
                placeholder="Enter Input" 
                onChange={handleInput}
            />
            <button onClick={setting}>Set Movies</button>
        </>
     );
}
 
export default Getter;