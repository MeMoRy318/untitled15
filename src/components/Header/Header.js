import {useNavigate} from "react-router-dom";

import css from './Header.module.css';
import {BurgerMenu, SearchForm, UserInfo} from "../index";


const Header = () => {

    const navigate = useNavigate();


    return (
        <div className={css.header}>

            <div className={css.header__row}>
                <BurgerMenu/>
                <div
                    onClick={()=>navigate('/')}
                    className={css.header__logo}>
                    <span className={css.header__logo_blue}>KINO</span>
                    <span className={css.header__logo_white}>MOVIE</span></div>
            </div>

                <SearchForm/>

            <div>
                <UserInfo/>
            </div>

        </div>
    );
};

export {Header};