import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/UserSlice";
import { apiSlice, pokemonApi } from "./slice/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const Store= configureStore({
    reducer:{
        user: userSlice.reducer,
        [apiSlice.reducerPath]:apiSlice.reducer,
    },
    middleware:  getDefaultMiddlear=>{
        return getDefaultMiddlear().concat(apiSlice.middleware)
    },
    devTools:true
})
