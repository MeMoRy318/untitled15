import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

import {movieAction} from "../../redux/slices";
import {Player} from "../../components";


const PlayerPage = () => {


    const {id} = useParams();
    const dispatch = useDispatch();
    const {videos} = useSelector(state => state.movieReducer);


    useEffect(()=>{
        dispatch(movieAction.getVideoById({id}))
    },[id,dispatch])


    return (
        <>
            {!!videos.length && <Player video={videos}/>}
        </>
    );
};

export {PlayerPage};