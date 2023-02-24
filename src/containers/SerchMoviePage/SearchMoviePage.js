import {useParams} from "react-router-dom";

import {SearchMovies} from "../../components";


const SearchMoviePage = () => {


    const {query} = useParams();


    return (
        <>
            <SearchMovies query={query}/>
        </>
    );
};

export {SearchMoviePage};