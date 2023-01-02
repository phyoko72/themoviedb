const Cast = ({cast}) => {

    let imageSrc,size;

    if(!cast.profile_path){
        imageSrc = "/user.png"
        size = 200
    }else{
        imageSrc = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${cast.profile_path}`
        size = 100
    }

    
    return ( 
        <div>
            <img className=" max-w-none" width={size} src={imageSrc} alt={cast.original_name} />
            <h2> {cast.name} </h2>
        </div>
     );
}
 
export default Cast;