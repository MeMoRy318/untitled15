import {Outlet} from "react-router-dom";

import css from './Layout.module.css';
import {Footer, Header} from "../components";


const Layout = () => {


    return (
        <>
            <Header/>
            <div className={css.content}>
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
};


export {Layout};
