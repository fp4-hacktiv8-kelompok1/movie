import { configureStore } from "@reduxjs/toolkit";
import wishSlice from "./wishSlice";

const store = configureStore({
    reducer: {
        wishlist: wishSlice
    },
});

export default store;