import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './MoviesListCard.module.css';
import {movieAction} from "../../redux/slices";
import {Loading, MovieListCard, Pagination} from "../index";


const MoviesListCard = ({id}) => {


    const dispatch = useDispatch();
    const [query,setQuery] = useSearchParams({page:'1'});
    const {filterMovie,isLoading,total_pages} = useSelector(state => state.movieReducer);


    useEffect(()=>{
            dispatch(movieAction.getFilterMovie({
                page:query.get('page'),
                with_genres:id,
                sort_by:'popularity.desc',
                vote_average:{gte:1,lte:10}
            }))
    },[id,dispatch,query])


    return (
        <div className={css.movie__column}>

            {isLoading ? <Loading width={65} height={100}/> : !!filterMovie.length && filterMovie.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}

            {total_pages > 1 && <Pagination setQuery={setQuery}/>}

        </div>
    );
};

export {MoviesListCard};