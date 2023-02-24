import {useState} from "react";

import css from './Player.module.css';


const Player = ({video}) => {


    const [videos,setVideos] = useState(video[0]);


    return (
        <div className={css.player__row}>

                <iframe style={{height:'90vh',width:'70%'}}  src={videos.video_url} allowFullScreen></iframe>

            <div className={css.player__btn}>
                {!!video.length && video.map(v => <button key={v.id} onClick={()=>setVideos(v)}>{v.name}</button>)}
            </div>

        </div>

    );
};

export {Player};