import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Loading, MovieListCard, Pagination} from "../index";
import {movieAction} from "../../redux/slices";
import css from './FavoriteMovies.module.css';



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

            {
                isLoading ? <Loading height={100} width={65}/> :
                    !!favoriteMovie.length && favoriteMovie.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}

            {!!favoriteMovie.length && total_pages > 1 && <Pagination setQuery={setQuery}/>}
        </div>
    );
};

export {FavoriteMovies};