import { createSlice } from '@reduxjs/toolkit'
import { editProfile } from '../api/editProfileApi';

const initialState = {
    loading: false,
    profile: null,
    error: null
}

const editProfileSlice = createSlice({
    name: "editProfile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(editProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(editProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.profile = action.payload
                state.error = null;
            })
            .addCase(editProfile.rejected, (state, action) => {
                state.loading = false;
                state.profile = null;
                state.error = (action.payload) || "Something went wrong";
            })
    }
});

// export const { } = editProfileSlice.actions

export default editProfileSlice.reducer