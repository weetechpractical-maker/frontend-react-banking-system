import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../features/utils/axiosInstance/axiosInstance";
import { SERVER_END_POINTS } from "../../authConstants";

export const addNewTransaction = createAsyncThunk("transaction/new-transaction", async (new_transaction, { rejectWithValue }) => {
    try {
        const res = await api.post(`/${SERVER_END_POINTS.TRANSACTION}`, new_transaction)
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data?.error || "Unable to add transaction");
        }
        return rejectWithValue("Something went wrong");
    }
})

export const fetchTransaction = createAsyncThunk("transaction/fetchTransaction", async (_, { rejectWithValue }) => {
    try {
        const res = await api.get(`/${SERVER_END_POINTS.TRANSACTION}`)
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data?.error || "Unable to add transaction");
        }
        return rejectWithValue("Something went wrong");
    }
})

export const editTransaction = createAsyncThunk(
    "transaction/editTransaction",
    async ({ id, updatedData }, { rejectWithValue }) => {
        try {
            const res = await api.patch(
                `/${SERVER_END_POINTS.TRANSACTION}/${id}`,
                updatedData
            );
            return res.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(
                    error.response?.data?.error || "Unable to edit transaction"
                );
            }
            return rejectWithValue("Something went wrong");
        }
    }
);

export const deleteTransaction = createAsyncThunk(
    "transaction/deleteTransaction",
    async (id, { rejectWithValue }) => {
        try {
            await api.delete(
                `/${SERVER_END_POINTS.TRANSACTION}/${id}`
            );
            return id;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(
                    error.response?.data?.error || "Unable to delete transaction"
                );
            }
            return rejectWithValue("Something went wrong");
        }
    }
);