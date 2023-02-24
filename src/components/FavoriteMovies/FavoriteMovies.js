import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {movieAction} from "../../redux/slices";
import {Loading} from "../Loading/Loading";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import css from './FavoriteMovies.module.css';
import {useSearchParams} from "react-router-dom";
import {Pagination} from "../Pagination/Pagination";


const FavoriteMovies = () => {


    const dispatch = useDispatch();
    const {favoriteMovie,isLoading,total_pages} = useSelector(state => state.movieReducer);
    const [query,setQuery] = useSearchParams({page:'1'});


    useEffect(()=>{
        dispatch(movieAction.getFavoriteMovie({page:query.get('page')}))
    },[dispatch,query])


    useEffect(()=>{
        if (total_pages > 1 && favoriteMovie.length < 20){
            dispatch(movieAction.getFavoriteMovie({page:query.get('page')}))
        }
    },[favoriteMovie.length,dispatch,query,total_pages])


    return (
        <div className={css.movie__column}>

            {isLoading ? <Loading height={100} width={65}/> : !!favoriteMovie.length && favoriteMovie.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}

            { total_pages > 1 && <Pagination setQuery={setQuery}/>}
        </div>
    );
};

export {FavoriteMovies};