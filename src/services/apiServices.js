import axios from "axios";

import {baseURL} from "../constans";


const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjkyNjM0YTc1YmMyZTQ3OTM4MTVkZWY4MDZjY2QyNCIsInN1YiI6IjYyZTNmNWVlZjA2NDd' +
    'jMDA1YTcwYTg3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.czOJOuIjceNFLFbA_U4xlGMOFpL5zB8-UJ6bTmCcTxA';


const apiServices = axios.create({baseURL});


apiServices.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${access}`
    return config;
});

export {apiServices};