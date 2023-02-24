import {useLocation} from "react-router-dom";

import {FilterMovies} from "../../components";


const FilterMoviePage = () => {


    const {state} = useLocation();


    return (
        <>
            <FilterMovies state={state}/>
        </>
    );
};

export {FilterMoviePage};