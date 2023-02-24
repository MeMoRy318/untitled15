import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {movieAction} from "../../redux/slices";
import {Loading, Movie} from "../index";


const MovieInfo = ({id}) => {


    const dispatch = useDispatch();
    const {movieById,isLoading} = useSelector(state => state.movieReducer);


    useEffect(()=>{
        dispatch(movieAction.getMovie({id}))
    },[id,dispatch])


    return (
        <>

            { isLoading ? <Loading width={100} height={80}/> : movieById && <Movie movie={movieById}/>}
        </>
    );
};

export {MovieInfo};