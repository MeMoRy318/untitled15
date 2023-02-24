import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {Loading, MovieListCard, Pagination} from "../index";
import {movieAction} from "../../redux/slices";
import css from "./FilterMovies.module.css";


const FilterMovies = ({state}) => {

    const dispatch = useDispatch();
    const [page,setPage] = useState({page:'1'});
    const {filterMovie,isLoading,total_pages} = useSelector(state => state.movieReducer);


    useEffect(()=>{
        setPage(prevState => ({...prevState,page: '1'}))
    },[state])


    useEffect(()=>{
            dispatch(movieAction.getFilterMovie({...state,...page}))
    },[dispatch,state,page])


    return (
        <div className={css.movie__column}>
            {isLoading ? <Loading height={100} width={65}/> : filterMovie.length && filterMovie.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            { total_pages > 1 && <Pagination setQuery={setPage}/>}
        </div>
    );
};

export {FilterMovies};