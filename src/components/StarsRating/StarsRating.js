import css from './StarsRating.module.css';

const StarsRating = ({rating}) => (

    <div className={css.rating}>
        <div className={css.rating_stars}>

            <div className={css.rating_stars_back}>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
            </div>

            <div className={css.rating_stars_fill}
                 style={{width: `${Math.round(rating * 5) * 2}%`}}>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
            </div>

        </div>
    </div>
);
export {StarsRating}