import {apiServices} from "./apiServices";
import {urls} from "../constans";


const movieServices = {
    getAllMovie:(page,with_genres=28,sort_by='popularity.desc',gte=1,lte=10,primary_release_year)=>
        apiServices.get(
            urls.movie.base,
            {params:{
            page,
            with_genres,
            'vote_average.gte':gte,
            'vote_average.lte':lte,
            sort_by:sort_by,
            primary_release_year:primary_release_year
    }}),
    searchMovie:(query,page)=>apiServices.get(urls.search.base,{params:{query,page}}),
    getPopularMovie:()=>apiServices.get(urls.popular.base),
    getMovieById:(id)=>apiServices.get(urls.movie.byId(id)),
    getCredits:(id)=>apiServices.get(urls.credits.base(id)),
    getVideo:(id)=>apiServices.get(urls.videos.base(id)),
    getGenres:()=>apiServices.get(urls.genre.base),
    postMovie:(id,boolean)=>apiServices.post(urls.postFavorite.base(13652460),{media_type: "movie", media_id: id, favorite: boolean}),
    getFavorite:(page)=>apiServices.get(urls.getFavorite.base(13652460),{params:{page}})

};

export {movieServices};
