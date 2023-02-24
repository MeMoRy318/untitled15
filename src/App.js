import {Navigate, Route, Routes} from "react-router-dom";

import {Layout} from "./layout";
import {
    FavoriteMoviePage,
    FilterCardPage,
    FilterMoviePage, LoginFormPage,
    MovieInfoPage,
    MoviesListCardPage,
    MoviesPage,
    PlayerPage, RegisterFormPage,
    SearchMoviePage
} from "./containers";


const App = () => {


    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'movieList'}/>}/>
                <Route path={'movieList'} element={<MoviesPage/>}/>
                <Route path={'movieInfo/:id'} element={<MovieInfoPage/>}/>
                <Route path={'player/:id'} element={<PlayerPage/>}/>
                <Route path={'filterMovie'} element={<FilterCardPage/>}>
                    <Route path={'genre/:id'} element={<MoviesListCardPage/>}/>
                    <Route path={'params/:params'} element={<FilterMoviePage/>}/>
                    <Route path={'search/:query'} element={<SearchMoviePage/>}/>
                    <Route path={'favorite'} element={<FavoriteMoviePage/>}/>
                </Route>
                <Route path={'register'} element={<RegisterFormPage/>}/>
                <Route path={'login'} element={<LoginFormPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};