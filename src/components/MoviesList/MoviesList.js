import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {Loading, MovieList} from "../index";
import css from './MoviesList.module.css';
import {movieAction} from "../../redux/slices";


const MoviesList = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {movie,isLoading} = useSelector(state => state.movieReducer);


    useEffect(()=>{
        dispatch(movieAction.getMovieList())
    },[dispatch])


    return (

        <div className={css.movie}>
            {isLoading ? <Loading width={100} height={100}/> :
                <div className={css.container}>
                    
                    <div className={css.movie__btnHeader}>
                        <button onClick={() => navigate('/filterMovie/genre/28')}>See everything</button>
                    </div>

                    <div className={css.movie__row}>
                        {!!movie.length && movie.map(movie => <MovieList key={movie.id} movie={movie}/>)}
                    </div>

                    <div className={css.movie__btnBox}>
                        <button onClick={() => dispatch(movieAction.showMore())}>Show more</button>
                    </div>
                </div>
            }
        </div>
    );
};
export {MoviesList};