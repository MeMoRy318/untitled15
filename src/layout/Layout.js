import {Outlet} from "react-router-dom";
import {useContext} from "react";

import {Footer, Header} from "../components";
import css from './Layout.module.css';
import {ThemeContext} from "../hok";


const Layout = () => {

const {theme} = useContext(ThemeContext);

    return (
        <>
            <Header/>
            <div className={`${css.content} ${theme === 'light' ? css.light : css.dark }`}>
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
};


export {Layout};
