import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieServices} from "../../services";


const initialState = {
genres:[]
};

const getAllGenre = createAsyncThunk(
    'genreSlice/getAllGenre',
    async (_,thunkAPI)=>{
        try {
            const {data} = await movieServices.getGenres();
            return data;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const genreSlice = createSlice({
    name:'genreSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(getAllGenre.fulfilled,(state, action)=>{
                state.genres = action.payload.genres;
            })
});

const {reducer:genreReducer} = genreSlice;

const genreAction = {
    getAllGenre
}

export {genreAction,genreReducer};
