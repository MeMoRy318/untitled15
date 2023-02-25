import {useContext, useEffect} from "react";
import {Carousel} from 'react-carousel-minimal';
import {useDispatch, useSelector} from "react-redux";

import {movieAction} from "../../redux/slices";
import {ThemeContext} from "../../hok";

const Slider = () => {


    const dispatch = useDispatch();
    const {popularMovie} = useSelector(state => state.movieReducer);
    const {theme} = useContext(ThemeContext);


    useEffect(()=>{
        dispatch(movieAction.getPopular())
    },[dispatch])


    const captionStyle = {fontSize: '2em', fontWeight: 'bold',}
    const slideNumberStyle = {fontSize: '20px', fontWeight: 'bold',}


    return (
        <div>
            {!!popularMovie.length &&
                <Carousel
                    data={popularMovie}
                    time={4000}
                    width="100%"
                    height={theme === 'light' ? '450px' : '500px'}
                    captionStyle={captionStyle}
                    radius="0"
                    slideNumber={false}
                    slideNumberStyle={slideNumberStyle}
                    captionPosition="bottom"
                    automatic={true}
                    dots={false}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={false}
                    thumbnailWidth="100px"
                    style={
                        theme === 'light' ?
                    {textAlign: "center", maxHeight: "500px", maxWidth:"1200px", margin: "140px auto 60px auto",} :
                     {textAlign: "center", maxHeight: "500px",}
                }
                />
            }

        </div>
    );
};

export {Slider};