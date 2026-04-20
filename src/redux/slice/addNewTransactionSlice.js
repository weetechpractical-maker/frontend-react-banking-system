import { createSlice } from '@reduxjs/toolkit'
import { addNewTransaction, deleteTransaction, editTransaction, fetchTransaction } from '../api/addNewTransactionApi';


const initialState = {
    loading: false,
    transaction: [],
    error: null
}

const addNewTransactionSlice = createSlice({
    name: "addNewTransaction",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            // Add Transaction
            .addCase(addNewTransaction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addNewTransaction.fulfilled, (state, action) => {
                state.loading = false;
                state.transaction.push(action.payload)
                state.error = null;
            })
            .addCase(addNewTransaction.rejected, (state, action) => {
                state.loading = false;
                state.transaction = [];
                state.error = (action.payload) || "Something went wrong";
            })

            // Fetch Transaction
            .addCase(fetchTransaction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTransaction.fulfilled, (state, action) => {
                state.loading = false;
                state.transaction = action.payload
                state.error = null;
            })
            .addCase(fetchTransaction.rejected, (state, action) => {
                state.loading = false;
                state.transaction = [];
                state.error = (action.payload) || "Something went wrong";
            })

            // Edit Transaction
            .addCase(editTransaction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(editTransaction.fulfilled, (state, action) => {
                state.loading = false;

                const index = state.transaction.findIndex(
                    (item) => item.id === action.payload.id
                );

                if (index !== -1) {
                    state.transaction[index] = action.payload;
                }

                state.error = null;
            })
            .addCase(editTransaction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })

            // Delete Transaction

            .addCase(deleteTransaction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteTransaction.fulfilled, (state, action) => {
                state.loading = false;

                state.transaction = state.transaction.filter(
                    (item) => item.id !== action.payload.id
                );

                state.error = null;
            })
            .addCase(deleteTransaction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })
    }

});

// export const { } = addNewTransactionSlice.actions

export default addNewTransactionSlice.reducer