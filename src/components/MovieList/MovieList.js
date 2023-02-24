import {useNavigate} from "react-router-dom";

import css from './MovieList.module.css';


const MovieList = ({movie}) => {


    const navigate = useNavigate();
    const {id, img, title, rating, release} = movie;
    const [yearRelease] = release.split('-');


    return (
        <div className={css.movie__column}>

            <div className={css.movie__bg} onClick={() => navigate(`/movieInfo/${id}`)}>
                <img src={img} alt={title} className={css.movie__img}/>
                <span
                    className={+yearRelease === new Date().getFullYear() ? css.movie__badge : css.movie__badge_none}>NEW</span>
                <span className={rating > 5 ? css.movie__rating : css.movie__rating_red}>{rating}</span>
            </div>

            <div className={css.movie__title}>{title}</div>
            <div className={css.movie__release}>{yearRelease}, Movie</div>

        </div>
    );
};

export {MovieList};