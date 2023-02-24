import {createSlice} from "@reduxjs/toolkit";


const initialState ={
    user:false,
    isLogin:false
};


const authSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers:{
        registerUser:(state, action)=>{
            state.user = {...action.payload,loginTime:JSON.stringify(new Date())};
        },
        loginUser:(state)=>{
            state.isLogin = true;

        },
        outUser:(state)=>{
            state.isLogin = false;
        }
    }
});


const {reducer:authReducer,actions:{loginUser,registerUser,outUser}} = authSlice;


const authAction = {
    loginUser,
    registerUser,
    outUser
};

export {authAction,authReducer};