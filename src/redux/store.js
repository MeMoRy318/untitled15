import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {authReducer, genreReducer, movieReducer, posterReducer} from "./slices";


const rootReducers = combineReducers({
    movieReducer,
    posterReducer,
    genreReducer,
    authReducer
});


const setupStore = () => configureStore({
    reducer:rootReducers
});

export {setupStore};