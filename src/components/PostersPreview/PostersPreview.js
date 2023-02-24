import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa";

import {posterAction} from "../../redux/slices";
import css from './PostersPreviem.module.css';
import {postersSort} from "../../utility";
import {Loading, PosterPreview} from "../index";


const PostersPreview = ({id}) => {


    const dispatch = useDispatch();
    const {people, count,isLoading} = useSelector(state => state.posterReducer);
    const posterSort = postersSort(people, people.length, count);


    useEffect(() => {
        dispatch(posterAction.getMovieCredits({id}));
    }, [dispatch, id])


    return (
        <div className={css.poster}>

            <div className={css.poster__rowBtn}>

                <div className={css.poster__actors}> Actors <span>({people.length})</span></div>

                <div className={css.poster__btnBox}>
                    <button disabled={count === 1}  onClick={() => dispatch(posterAction.decrement())}><FaArrowCircleLeft
                        className={css.poster__icon} style={ count === 1 && {color:'#003c59'}}/></button>
                    <button disabled={count + 4 === people.length} onClick={() => dispatch(posterAction.count())}>
                        <FaArrowCircleRight className={css.poster__icon} style={ count+4 === people.length && {color:'#003c59'}}/></button>
                </div>

            </div>

            <div className={css.poster__row}>
                {isLoading ? <Loading width={100} height={20}/> : posterSort.length && posterSort.map(poster => <PosterPreview key={poster.id} poster={poster}/>)}
            </div>

        </div>
    );
};

export {PostersPreview};