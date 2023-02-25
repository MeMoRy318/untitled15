import css from './NotFoundPage.module.css';
import {useNavigate} from "react-router-dom";


const NotFoundPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className={css.notFound}>
                <div className={css.notFound__bg}></div>
                <div className={css.notFound__body}>
                    <div className={css.notFound__column}>
                        <div className={css.notFound__error}>
                            404
                        </div>
                        <div className={css.notFound__title}>
                            Oops, the page you're looking for does not exist.
                        </div>
                        <div className={css.notFound__text}>
                            You may want to head back to the homepage.
                            If you think something is broken, report a problem.
                        </div>
                        <div className={css.notFound__buttonBox}>
                            <button onClick={()=>navigate('/')} className={css.notFound__bt}>RETURN HOME</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export {NotFoundPage};