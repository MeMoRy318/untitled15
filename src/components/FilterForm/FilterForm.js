import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useEffect} from "react";

import {genreAction} from "../../redux/slices";
import css from './FilterForm.module.css';
import {createArrayYears} from "../../utility";


const FilterForm = () => {

    const {register,handleSubmit,reset} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {genres} = useSelector(state => state.genreReducer);
    const years = createArrayYears().reverse();


    useEffect(()=>{
        dispatch(genreAction.getAllGenre())
    },[dispatch])


    const submit = async (data) => {
        navigate(`/filterMovie/params/${JSON.stringify(data)}`)
    };


    return (

            <form onSubmit={handleSubmit(submit)} className={css.filterForm}>

                <section className={css.filterForm__sticky}>
                    <h1>All movies</h1>
                    {/*<p className={css.filterForm__text}>A selection of films from around the world</p>*/}
                    <div className={`${css.filterForm__inputBoxSort}`}>
                        <h2 className={css.filterForm__title}>Release year</h2>
                        <select className={css.filterForm__inputSort} {...register('primary_release_year')}>
                            <option value="primary_release_year">All years</option>
                            {years.map( year=><option key={year} value={year}>{year}</option>)}
                        </select>
                    </div>

                    <div className={css.filterForm__inputBoxVote}>
                        <h2 className={css.filterForm__title}>Vote average</h2>
                        <input className={css.filterForm__inputVote} type="number" min={1} max={10} defaultValue={1} {...register('vote_average.gte')}/>
                        <input className={css.filterForm__inputVote} type="number" min={1} max={10} defaultValue={10} {...register('vote_average.lte')}/>
                    </div>

                    <div className={css.filterForm__inputBoxSort}>
                        <h2 className={css.filterForm__title}>Sort by</h2>
                        <select className={css.filterForm__inputSort} {...register('sort_by')} defaultValue={'popularity.asc'}>
                            <option value="popularity.desc">Popularity</option>
                            <option value="vote_count.desc">Vote count</option>
                            <option value="vote_average.desc">Rating</option>
                        </select>
                    </div>

                    <div className={`${css.filterForm__inputBoxSort}`}>
                        <h2 className={css.filterForm__title}>Genres</h2>
                        <select className={css.filterForm__inputSort} {...register('with_genres')}>
                            <option value="with_genres">All genres</option>
                            {!!genres.length && genres.map(genre =><option key={genre.id} value={genre.id}>{genre.name}</option>)}
                        </select>
                    </div>

                    <div className={css.filterForm__buttonBox}>
                        <button className={css.filterForm__buttonApply}>Apply</button>
                        <button className={css.filterForm__buttonReset} onClick={()=>reset()}>Reset</button>
                    </div>
                </section>

            </form>

    );
};

export {FilterForm};