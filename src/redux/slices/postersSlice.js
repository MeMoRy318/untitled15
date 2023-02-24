import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieServices} from "../../services";
import {urls} from "../../constans";


const initialState = {
    people:[],
    count:0,
    isLoading:false
};


const getMovieCredits = createAsyncThunk(
    'movieSlice/getMovieCredits',
    async ({id},thunkAPI)=>{
        try {
            const {data} = await movieServices.getCredits(id);
            return data;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)


const posterSlice = createSlice({
    name:'posterSlice',
    initialState,

    reducers:{
        count:(state)=>{
            state.count +=1;
        },
        decrement:(state)=>{
            state.count -= 1
        }
    },

    extraReducers:builder =>
        builder
            .addCase(getMovieCredits.fulfilled,(state, action)=>{
                state.isLoading = false;
                state.count = 1;
                state.people = action.payload?.cast.map(m => ({
                    name:m['original_name'],
                    img: !!m['profile_path'] ? urls.posterUrl.base + m['profile_path'] : 'https://us.123rf.com/450wm/urfandadashov/urfandadashov1805/urfandadashov180500070/urfandadashov180500070.jpg?ver=6',
                    id:m['id']
                }))
            })
            .addDefaultCase((state, action) => {
                const type = action.type.split('/').splice(-1)[0];
                state.isLoading = type === 'pending';
            })
});

const {reducer:posterReducer,actions:{count,decrement}} = posterSlice;


const posterAction = {
getMovieCredits,
    count,
    decrement
};

export {posterReducer,posterAction};