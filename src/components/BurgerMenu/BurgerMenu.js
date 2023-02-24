import './Burger.css'
import {Link} from "react-router-dom";


const BurgerMenu = () => {

    return (

        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox"/>
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>

            <ul className="menu__box">
                <li><Link className="menu__item" to={'/'}>Home</Link></li>
                <li><Link className="menu__item" to={'/filterMovie/genre/all'}>movie</Link></li>
                <li><Link className="menu__item" to={'/filterMovie/favorite'}>Favorite</Link></li>
                <li><Link className="menu__item" to={'/'}>Contact</Link></li>
                <li><Link className="menu__item" to={'/'}>Twitter</Link></li>
            </ul>
        </div>
    );
};

export {BurgerMenu};