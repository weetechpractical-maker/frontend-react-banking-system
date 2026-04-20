import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as generateId } from "uuid";
import { api } from "../../axiosInstance";
import { isAuthenticated, SERVER_END_POINTS } from "../../authConstants";

export const signupUser = createAsyncThunk("auth/signup", async (data, { rejectWithValue }) => {
    try {

        const userWithId = {
            ...data,
            userId: generateId(),
        };
        const res = await api.post(`/${SERVER_END_POINTS.USERS}`, userWithId)
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data?.error || "SignUp Failed");
        }
        return rejectWithValue("Something went wrong");
    }
})

// As I don't have signup for now  , the logic for login page will be different.
export const loginUser = createAsyncThunk("auth/login", async (data, { rejectWithValue }) => {
    try {
        const userWithId = {
            ...data,
            userId: generateId(),
        };
        const res = await api.post(`/${SERVER_END_POINTS.USERS}`, userWithId)
        localStorage.setItem(isAuthenticated, true)
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data?.error || "login Failed");
        }
        return rejectWithValue("Something went wrong");
    }
})  