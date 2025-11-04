import { configureStore } from "@reduxjs/toolkit";
import BooksSlice from "./BooksSlice";

const appStore = configureStore({
    reducer: {
        // Add your reducers here
        books: BooksSlice
    }
})

export default appStore;