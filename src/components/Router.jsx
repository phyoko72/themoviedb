import {useRoutes} from "react-router-dom";
import Getter from "../Getter";
import Home from "../Home";
import Movie from "./Movie";

const Router = () => {

    let element = useRoutes(
        [
            { path:'/',element: <Home/> },
            { path:'/movie/:movieId', element: <Movie/> },
            { path:'/getter', element:<Getter/> }
        ]
    )

    return element;
}
 
export default Router;