import css from './FilterCardPage.module.css';
import {Outlet} from "react-router-dom";

import {FilterForm} from "../../components";


const FilterCardPage = () => {


    return (
        <div className={css.container}>
            <FilterForm/>
            <Outlet/>
        </div>
    );
};

export {FilterCardPage};