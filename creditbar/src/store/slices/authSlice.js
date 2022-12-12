import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { useState } from "react";


export const register = createAsyncThunk('user/register', async (userInfo) => {
    try {
        axios.post('http://lala34.pythonanywhere.com/auth/users/', {...userInfo})
        ;
    } catch (error) {
        console.error(error)
    }
})


const auth = createSlice({
    name: 'auth',
    intialState: {},
    reducers: {

    }
})

export const login = createAsyncThunk(
    "user/Auth",
    async (userInfo) => {
        try {
        const { data } = await axios.post('http://lala34.pythonanywhere.com/auth/token/login/', userInfo);
            localStorage.setItem("tokenAuth", JSON.stringify(data));
            // localStorage.setItem("tokenAccess", JSON.stringify(data.access));
        } catch (e) {
            // dispatch(unUhangeAuth()); 
        }
    }
    );




export const authSlice = auth.reducer;