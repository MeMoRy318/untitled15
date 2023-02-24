import css from './PosterPreview.module.css';


const PosterPreview = ({poster}) => {


    const {name, img} = poster;


    return (
        <div className={css.poster__bg}>
            <img src={img} alt={name} className={css.poster__img}/>
            <span className={css.poster__name}>{name}</span>
        </div>
    );
};

export {PosterPreview};