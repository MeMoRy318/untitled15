import css from './Footer.module.css'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.footer__row}>
                <Link  to={'/'} className={css.footer__logo}>
                   <span className={css.footer__logo_blue}>KINO</span><span>MOVIE</span>
                </Link>
                <nav className={css.footer__nav}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/filterMovie/genre/28'}>Movie</Link>
                    <Link to={'/filterMovie/favorite'}>Favorite</Link>
                </nav>
                <div className={css.footer__year}>
                    <div>
                        © {new Date().getFullYear()} Kinomovie
                    </div>
                </div>
            </div>
        </footer>
    );
};

export {Footer};