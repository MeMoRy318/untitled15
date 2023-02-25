const posterUrl = 'https://image.tmdb.org/t/p/original/';
const youTube = 'https://www.youtube.com/embed/'
const baseURL = 'https://api.themoviedb.org/3';
const notFoundPoster='https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';
const list = '/list';
const credits = '/credits'
const genre = '/genre';
const popular ='/popular';
const search = '/search';
const movie = '/movie';
const movies = '/movies';
const videos = '/videos';
const discover = '/discover';
const account = '/account';
const favorite = '/favorite'

const urls = {
    movie:{
        base:`${discover}/${movie}`,
        byId:(id)=>`${movie}/${id}`
    },
    genre:{base:`${genre}${movie}${list}`},
    popular:{base:`${movie}/${popular}`},
    posterUrl:{base:posterUrl},
    credits:{base:(id)=>`${movie}/${id}${credits}`},
    videos:{base:(id)=>`${movie}/${id}${videos}`},
    youTube:{base:youTube},
    search:{base:`${search}${movie}`},
    postFavorite:{base:(id)=>`${account}/${id}${favorite}`},
    getFavorite:{base:(id)=>`${account}/${id}${favorite}${movies}`},
    notFoundPoster:{base:notFoundPoster}

};

export {urls,baseURL};