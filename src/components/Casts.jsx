import React, { useState, useEffect } from 'react';
import Cast from './Cast';

const Casts = ({movieId}) => {
    const [casts, setCasts] = useState([]);

    const castList = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=041b78259461fd4d77cb919edc543a71`

    const getCasts = async()=>{
        try {
            const res = await fetch(castList)
            const data = await res.json()
            const lists = data.cast

            setCasts(lists)

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        getCasts()
    },[])

    return ( 
        <div className=' relative overflow-x-auto'>
            <h3>Casts</h3>
            <ul className=' flex gap-3'>
                {casts && casts.map(x=>(
                    <li key={x.id}>
                        <Cast cast={x} />
                    </li>

                ))}
            </ul>
            <hr />

        </div>
     );
}
 
export default Casts;