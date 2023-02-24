import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {Loading, MovieListCard, Pagination} from "../index";
import {movieAction} from "../../redux/slices";
import css from './SearchMovie.module.css';


const SearchMovies = ({query}) => {


    const dispatch = useDispatch();
    const [query_,setQuery] = useSearchParams({page:'1'});
    const {search,isLoading,total_pages} = useSelector(state => state.movieReducer);


    useEffect(()=>{
        dispatch(movieAction.searchMovies({query,page:query_.get('page')}))
    },[query,dispatch,query_])


    return (
        <div className={css.movie__column}>

            {isLoading ? <Loading height={100} width={65}/> : !!search.length && search.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}

            {total_pages > 1 && <Pagination setQuery={setQuery}/>}

        </div>
    );
};

export {SearchMovies};