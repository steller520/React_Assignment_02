import { createSlice } from "@reduxjs/toolkit";

const BooksSlice = createSlice({
    name: "books",
    initialState: {
        books: [],
        categories: [],
        newBookAdded: false
    },
    reducers: {
        addBook: (state, action) => {
            // console.log("Adding book:", action.payload);
            state.books.push(action.payload);
        },
        removeBook: (state, action) => {
            state.books = state.books.filter(book => book.id !== action.payload.id);
        },
        updateBook: (state, action) => {
            const index = state.books.findIndex(book => book.id === action.payload.id);
            if (index !== -1) {
                state.books[index] = action.payload;
            }
        },
        addCategory: (state, action) => {
            state.categories.push(action.payload);
        },
        setNewBookAdded: (state, action) => {
            state.newBookAdded = action.payload;
        }

    }
})

export const { addBook, removeBook, updateBook, addCategory, setNewBookAdded } = BooksSlice.actions;
export default BooksSlice.reducer;