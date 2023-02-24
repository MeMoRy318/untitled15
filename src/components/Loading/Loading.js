import css from './Loading.module.css'
const Loading = ({height,width}) => {
    return (
        <div className={css.spinner_container} style={{height:`${height}vh` ,width:`${width}%`}}>
            <div className={css.loading}></div>
        </div>
    );
};

export {Loading};