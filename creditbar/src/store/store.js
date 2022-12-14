import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";



export const store = configureStore({
    reducer: authSlice,
})

// export const storageValue = localStorage.getItem('tokenAuth')
