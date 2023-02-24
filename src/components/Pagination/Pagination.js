import {useSelector} from "react-redux";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

import css from './Pagination.module.css';
import {createPages} from "../../utility";


const Pagination = ({setQuery}) => {


    const {page,total_pages} = useSelector(state => state.movieReducer);
    const pages = createPages(total_pages,page);


    return (
        <div className={css.pagination}>
           <div className={css.pagination__row}>

               <div className={css.pagination__btnBox}>
                   <button className={css.pagination__btnPrev} disabled={page===1} onClick={()=>setQuery(prev => ({...prev,page:page-1+''}))}>
                       <FaChevronLeft className={css.pagination__icon}/>
                   </button>
               </div>

               <div className={css.pagination__page}>
                       {pages.map(value =>
                           <span key={value} className={ value===page ? css.active : 'default'} onClick={()=>setQuery(prev => ({...prev,page:value+''}))}>
                    {value}
                </span>)}

               </div>

               <div className={css.pagination__btnBox}>
                   <button className={css.pagination__btnPrev} disabled={page===total_pages} onClick={()=>setQuery(prev => ({...prev,page:page+1+''}))}>
                       <FaChevronRight className={css.pagination__icon}/>
                   </button>
               </div>

           </div>
        </div>
    );
};

export {Pagination};