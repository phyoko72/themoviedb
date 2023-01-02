import { useState, useEffect } from "react";

const Preview = ({movieId}) => {

    const [preview, setPreview] = useState('');

    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=041b78259461fd4d77cb919edc543a71`;

    const trailer = async()=>{
        try {

            const res = await fetch(url)
            const data = await res.json()

            setPreview(data.results[0].key)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        trailer()
    },[])

    return ( 
        <>
            {preview &&
                <iframe className="m-auto" width="560" height="315" src={`https://www.youtube.com/embed/${preview}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" crossOrigin="anonymous" allowFullScreen></iframe>
            }

        </>
     );
}
 
export default Preview;