import {useNavigate} from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import {useForm} from "react-hook-form";

import css from './SearchForm.module.css';


const SearchForm = () => {


    const {register,handleSubmit,reset} = useForm();
    const navigate = useNavigate();


    const submit = async (data) => {
     await   navigate(`/filterMovie/search/${data.query}`)
        reset()
    };


    return (
        <form onSubmit={handleSubmit(submit)} className={css.searchForm}>

            <label>
                <input type="text" placeholder={'Search'}{...register('query',{required:true})} className={css.searchForm__input}/>
            </label>

            <button className={css.searchForm__btn}><FaSearch/></button>

        </form>
    );
};

export {SearchForm};