import { createSlice } from "@reduxjs/toolkit";

// Create a slice for books and categories
const BooksSlice = createSlice({
    name: "books",
    initialState: {
        books: [],
        categories: [],
        // Flag to indicate if a new book has been added
        newBookAdded: false
    },
    reducers: {
        // Add a book to the state
        addBook: (state, action) => {
            // console.log("Adding book:", action.payload);
            state.books.push(action.payload);
        },
        // Remove a book from the state
        removeBook: (state, action) => {
            state.books = state.books.filter(book => book.id !== action.payload.id);
        },
        // Update a book in the state
        updateBook: (state, action) => {
            const index = state.books.findIndex(book => book.id === action.payload.id);
            if (index !== -1) {
                state.books[index] = action.payload;
            }
        },
        // Add a category to the state
        addCategory: (state, action) => {
            state.categories.push(action.payload);
        },
        // Set the newBookAdded flag
        setNewBookAdded: (state, action) => {
            state.newBookAdded = action.payload;
        }

    }
})

// Export the actions
export const { addBook, removeBook, updateBook, addCategory, setNewBookAdded } = BooksSlice.actions;
// Export the reducer
export default BooksSlice.reducer;