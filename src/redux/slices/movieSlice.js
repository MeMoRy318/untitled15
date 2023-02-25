import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieServices} from "../../services";
import {urls} from "../../constans";


const initialState = {
    movie: [],
    filterMovie:[],
    videos:[],
    favoriteMovie:[],
    page:1,
    movieById:false,
    total_pages:1,
    popularMovie: [],
    search:[],
    isLoading:false
};


const getPopular = createAsyncThunk(
    'movieSlice/getPopular',
    async (_, thunkAPI) => {
        try {
            const {data: {results}} = await movieServices.getPopularMovie();
            return results;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);


const getMovieList = createAsyncThunk(
    'movieSlice/getMovieList',
    async (_, thunkAPI) => {
        try {
            const {data} = await movieServices.getAllMovie()
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);


const showMore = createAsyncThunk(
    'movieSlice/showMore',
    async (_, {getState, rejectWithValue})=>{
        try {
            const {movieReducer:{page,total_pages}} = getState();
            if (page !== total_pages && total_pages){
                const {data} = await movieServices.getAllMovie(page+1)
                return data;
            }
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)


const getMovie = createAsyncThunk(
    'movieSlice/getMovie',
    async ({id},thunkAPI)=>{
        try {
            const {data} = await movieServices.getMovieById(id);
            return data;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)


const getVideoById = createAsyncThunk(
    'movieSlice/getVideoById',
    async ({id},thunkAPI)=>{
        try {
            const {data} = await movieServices.getVideo(id);
            return data;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)


const getFilterMovie = createAsyncThunk(
    'movieSlice/getFilterMovie',
    async ({page,with_genres,sort_by,vote_average:{gte,lte},primary_release_year}, thunkAPI) => {
        try {
            const {data} = await movieServices.getAllMovie(page,with_genres,sort_by,gte,lte,primary_release_year)
            return data;
        } catch (e) {

            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);


const searchMovies = createAsyncThunk(
    'movieSlice/searchMovie',
    async ({query,page}, thunkAPI)=>{
        try {
            const {data} = await movieServices.searchMovie(query,page);
            // console.log(data);
            return data

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)


const getFavoriteMovie = createAsyncThunk(
    'movieSlice/getFavoriteMovie',
    async ({page},thunkAPI)=>{
        try {
           const {data} = await movieServices.getFavorite(page);
            return data;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)


const moviesSlice = createSlice({
    name: 'movieSlice',
    initialState,

    reducers: {
        deleteFavoriteMovie:(state, action)=>{
            const index = state.favoriteMovie.findIndex(value => value.id === action.payload );
            state.favoriteMovie.splice(index,1);
        }
    },

    extraReducers: builder =>
        builder

            .addCase(getPopular.fulfilled, (state, action) => {
                state.popularMovie = action.payload.map(value => ({
                    image: urls.posterUrl.base + value['backdrop_path'],
                    caption: value['original_title']
                }));
            })

            .addCase(getMovieList.fulfilled,(state, action)=>{
                state.isLoading = false;
                state.total_pages = action?.payload?.total_pages;
                state.page = action?.payload?.page;
                state.movie = action.payload.results.map(value =>({
                    id:value['id'],
                    body:value['overview'],
                    title:value['original_title'],
                    rating:value['vote_average'],
                    release:value['release_date'],
                    img: !!value['poster_path'] ? urls.posterUrl.base + value['poster_path'] : urls.notFoundPoster.base,
                }))
            })

            .addCase(showMore.fulfilled,(state, action)=>{
                state.isLoading = false
                state.page = action?.payload?.page;
                const result = action.payload.results.map(value =>({
                    id:value['id'],
                    body:value['overview'],
                    title:value['original_title'],
                    rating:value['vote_average'],
                    release:value['release_date'],
                    img: !!value['poster_path'] ? urls.posterUrl.base + value['poster_path'] : urls.notFoundPoster.base,

                }))
                state.movie = [...state.movie,...result]
            })

            .addCase(getMovie.fulfilled,(state, action)=>{
                state.isLoading = false
                state.videos = []
                const m = action.payload
                state.movieById = {
                    img: !!m['poster_path'] ? urls.posterUrl.base + m['poster_path'] : urls.notFoundPoster.base,
                    budget:m['budget'],
                    genres:m['genres'],
                    id:m['id'],
                    language:m['original_language'],
                    title:m['original_title'],
                    body:m['overview'],
                    release_date:m['release_date'],
                    runtime:m['runtime'],
                    retying:m['vote_average'],
                    companies:!!m?.['production_companies'][0]?.['logo_path'] ?
                        urls.posterUrl.base + m?.['production_companies'][0]?.['logo_path']:
                        urls.notFoundPoster.base,

                };
            })

            .addCase(getVideoById.fulfilled,(state, action)=>{
                state.videos = action.payload.results.map((m,index) => ({
                    id:index+1,
                    name:m['name'],
                    video_url:urls.youTube.base + m['key']
                }));
            })

            .addCase(getFilterMovie.fulfilled,(state, action)=>{
                state.isLoading = false
                state.page = action?.payload?.page;
                state.total_pages = action?.payload?.total_pages;
                state.filterMovie = action.payload.results.map(value =>({
                    id:value['id'],
                    body:value['overview'],
                    title:value['original_title'],
                    rating:value['vote_average'],
                    release:value['release_date'],
                    img: !!value['poster_path'] ? urls.posterUrl.base + value['poster_path'] : urls.notFoundPoster.base


                }))
            })

            .addCase(searchMovies.fulfilled,(state, action)=>{
                state.isLoading = false;
                state.total_pages = action?.payload?.total_pages;
                state.page = action?.payload?.page;
                state.search = action.payload.results.map(value =>({
                    id:value['id'],
                    body:value['overview'],
                    title:value['original_title'],
                    rating:value['vote_average'],
                    release:value['release_date'],
                    img: !!value['poster_path'] ? urls.posterUrl.base + value['poster_path'] : urls.notFoundPoster.base

                }))
            })

            .addCase(getFavoriteMovie.fulfilled,(state, action)=>{
                state.isLoading = false;
                state.total_pages = action?.payload?.total_pages;
                state.page = action?.payload?.page;
                state.favoriteMovie = action.payload.results.map(value =>({
                    id:value['id'],
                    body:value['overview'],
                    title:value['original_title'],
                    rating:value['vote_average'],
                    release:value['release_date'],
                    img: !!value['poster_path'] ? urls.posterUrl.base + value['poster_path'] : urls.notFoundPoster.base


                }))
            })

            .addDefaultCase((state, action) => {
                const type = action.type.split('/').splice(-1)[0];
                state.isLoading = type === 'pending';
            })
});


const {reducer: movieReducer,actions:{deleteFavoriteMovie}} = moviesSlice;


const movieAction = {
    getPopular,
    getMovieList,
    showMore,
    getMovie,
    getVideoById,
    getFilterMovie,
    searchMovies,
    getFavoriteMovie,
    deleteFavoriteMovie,

}

export {movieReducer, movieAction};