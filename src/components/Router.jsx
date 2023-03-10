import {useRoutes} from "react-router-dom";
import Home from "../Home";
import Movie from "./Movie";

const Router = () => {

    let element = useRoutes(
        [
            { path:'/',element: <Home/> },
            { path:'/movie/:movieId', element: <Movie/> },
        ]
    )

    return element;
}
 
export default Router;