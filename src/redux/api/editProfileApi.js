import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER_END_POINTS } from "../../../shared/constants/authConstants";
import { api } from "../../features/utils/axiosInstance/axiosInstance";

export const editProfile = createAsyncThunk("profile/edit-profile", async (profileData, { rejectWithValue }) => {
    try {
        const res = await api.post(`/${SERVER_END_POINTS.EDIT_PROFILE}`, profileData)
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data?.error || "Unable to add profile");
        }
        return rejectWithValue("Something went wrong");
    }
}) 