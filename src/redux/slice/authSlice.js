import { createSlice } from '@reduxjs/toolkit'
import { loginUser, signupUser } from '../api/authApi';
import { isAuthenticated } from '../../authConstants';

const initialState = {
    loading: false,
    user: null,
    isAuthenticated: localStorage.getItem(isAuthenticated || false),
    error: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        resetAuthState: (state) => {
            state.loading = false;
            state.user = null;
            state.isAuthenticated = false
            state.error = null;

            localStorage.removeItem(isAuthenticated)
        },
    },
    extraReducers: (builder) => {
        builder

            // Sign Up
            .addCase(signupUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = false
                state.error = null;
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.isAuthenticated = false
                state.error = (action.payload) || "Something went wrong";
            })

            // login
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.isAuthenticated = false
                state.error = (action.payload) || "Something went wrong";
            })
    }
});

export const { resetAuthState } = authSlice.actions

export default authSlice.reducer