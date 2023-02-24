import {useParams} from "react-router-dom";

import {MoviesListCard} from "../../components";


const MoviesListCardPage = () => {


    const {id} = useParams();


    return (
        <>
            <MoviesListCard id={id}/>
        </>
    );
};

export {MoviesListCardPage};