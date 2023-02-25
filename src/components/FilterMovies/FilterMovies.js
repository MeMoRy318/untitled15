import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";


import {Loading, MovieListCard, Pagination} from "../index";
import {movieAction} from "../../redux/slices";
import css from "./FilterMovies.module.css";


const FilterMovies = ({state}) => {

    const dispatch = useDispatch();
    const [query,setQuery] = useSearchParams({page:'1'});
    const {filterMovie,isLoading,total_pages} = useSelector(state => state.movieReducer);


    useEffect(()=>{
            dispatch(movieAction.getFilterMovie({...state,page:query.get('page'),}))
    },[dispatch,state,query])


    return (
        <div className={css.movie__column}>
            {isLoading ? <Loading height={100} width={65}/> : filterMovie.length && filterMovie.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            { total_pages > 1 && <Pagination setQuery={setQuery}/>}
        </div>
    );
};

export {FilterMovies};