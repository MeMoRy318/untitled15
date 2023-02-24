import {useParams} from "react-router-dom";

import {FilterMovies} from "../../components";


const FilterMoviePage = () => {


    const {params} = useParams();
    const state = JSON.parse(params)


    return (
        <>
            <FilterMovies state={state}/>
        </>
    );
};

export {FilterMoviePage};