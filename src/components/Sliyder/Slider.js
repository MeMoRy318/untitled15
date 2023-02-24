import {useEffect} from "react";
import {Carousel} from 'react-carousel-minimal';
import {useDispatch, useSelector} from "react-redux";

import {movieAction} from "../../redux/slices";


const Slider = () => {


    const dispatch = useDispatch();
    const {popularMovie} = useSelector(state => state.movieReducer);


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
                    height="500px"
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
                    style={{
                        textAlign: "center",
                        maxHeight: "500px",
                         // margin: "70px auto",
                        // marginBottom:'10px'
                    }}
                />
            }
        </div>
    );
};

export {Slider};