import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/slice/authSlice"

const Store = configureStore({
    reducer: {
        auth: authSlice,
    },
});

export default Store