import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import css from './MovieListCard.module.css';
import {StarsRating} from "../index";
import {movieServices} from "../../services";
import {movieAction} from "../../redux/slices";


const MovieListCard = ({movie}) => {


    const navigate = useNavigate();
    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const {img, id, body, rating, release, title} = movie;


    const [year] = release.split('-');
    const text = body.substring(0, 140);
    const result = pathname.includes('favorite')


    const addFavorite = async (e) => {
         await e.stopPropagation()
        await movieServices.postMovie(id,true)
    };


    const deleteFavorites = async (e) => {
        await e.stopPropagation();
        await movieServices.postMovie(id,false);
        await dispatch(movieAction.deleteFavoriteMovie(id))
    };


    return (
        <div className={css.movie__row} onClick={() => navigate(`/movieInfo/${id}`)}>

            <div className={css.movie__img}><img src={img} alt={title}/></div>

            <div className={css.movie__body}>
                <div className={css.movie__title}>{title}</div>
                <div className={css.movie__rating}>
                    <div>{year},</div>
                    <StarsRating rating={rating}/></div>
                <div className={css.movie__text}>{text}</div>
            </div>

            <div className={css.movie__btnBox}>
                {
                    !result ?
                        <button className={css.movie__btn} onClick={addFavorite}>Add Favorite</button>:
                        <button className={css.movie__btn} onClick={deleteFavorites}>Delete Favorite </button>

                }
            </div>
        </div>
    );
};

export {MovieListCard};