import { configureStore } from "@reduxjs/toolkit";
import BooksSlice from "./BooksSlice";

// Configure the Redux store
const appStore = configureStore({
    reducer: {
        // Add the books slice to the store
        books: BooksSlice
    }
})

export default appStore;