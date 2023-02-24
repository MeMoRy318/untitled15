import {useParams} from "react-router-dom";

import css from './MovieInfoPage.module.css';
import {MovieInfo, PostersPreview} from "../../components";


const MovieInfoPage = () => {


    const {id} = useParams();


    return (
        <div className={css.container}>
            <MovieInfo id={id}/>
            <PostersPreview id={id}/>
        </div>
    );
};

export {MovieInfoPage};