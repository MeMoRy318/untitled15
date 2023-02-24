import {useNavigate} from "react-router-dom";
import {FaRegPlayCircle, FaHeart} from "react-icons/fa";

import css from './Movie.module.css';
import {GenreBadge,StarsRating} from "../index";
import {movieServices} from "../../services";


const Movie = ({movie}) => {

    const {body, budget, companies, genres, img, language, release_date, runtime, title,id,retying} = movie;
    const [date] = release_date.split('-');
    const navigate = useNavigate();


    return (
        <div className={css.movie}>

            <div className={css.movie__row}>

                <div className={css.movie__img}>
                    <img src={img} alt={title}/>
                </div>

                <div className={css.movie__column}>
                    <div className={css.movie__logo}>
                        <img src={companies} alt={title}/>
                    </div>
                    <div className={css.movie__title}>{title}</div>
                    <div className={css.movie__btnRow}>
                        <button
                            onClick={()=>navigate(`/player/${id}`)}
                            className={css.movie__btnPlay}>
                            <FaRegPlayCircle
                            className={css.movie__btnPlay_icon}/> Play
                        </button>
                        <button
                            onClick={()=>movieServices.postMovie(id,true)}
                            className={css.movie__favorite}>
                            <FaHeart className={css.movie__favorite_icon}/> Favorite
                        </button>
                    </div>
                    <div className={css.movie__infoTitle}>About the film</div>
                    <div className={css.movie__text}><span>Retying</span> <StarsRating rating={retying}/> </div>
                    <div className={css.movie__text}><span>Countries</span> <span>{language}</span></div>
                    <div className={css.movie__text}><span>Genre</span> {genres.map(genre => <GenreBadge genres={genre} key={genre.id}/>)}</div>
                    <div className={css.movie__text}><span>Budget</span> <span>{budget}</span></div>
                    <div className={css.movie__text}><span>Runtime</span> <span>{runtime} min</span> </div>
                    <div className={css.movie__text}><span>Release date</span> <span>{date}</span></div>
                    <div className={css.movie__body}><span>Description</span> {body}</div>
                </div>
            </div>

        </div>
    );
};

export {Movie};