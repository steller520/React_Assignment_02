# Online Library - React & Redux

This project is a responsive and interactive online library application built with React, Vite, and Redux Toolkit. It allows users to browse book categories, view books within those categories, add new books to the collection, and search for books and categories.

[**GitHub Repository**](https://github.com/steller520/React_Assignment_02)

## Features

- **Browse Categories**: View a list of all book categories on the landing page.
- **Search Categories**: Filter categories in real-time with a search bar.
- **View Books by Category**: Click on a category to see all books belonging to it.
- **Browse All Books**: A dedicated page to view and search all books in the library.
- **Search Books**: Filter books by title or description.
- **Add New Books**: A form to add new books to the library, with client-side validation. If a new genre is entered, it is dynamically added to the list of categories.
- **Redirect after Add**: After successfully adding a book, the user is redirected to the "Browse Books" page.
- **Dynamic Image Generation**: Book images are dynamically generated based on the book title using an external image service.
- **Responsive Design**: The application is fully responsive and works on various screen sizes.
- **404 Error Page**: A custom 404 page is displayed for invalid routes, showing the incorrect URL.

## Tech Stack

- **Frontend**: [React](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Routing**: [React Router](https://reactrouter.com/) (v7)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## Project Structure

The project follows a standard React application structure:

```
/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images, fonts, etc.
│   ├── components/       # React components
│   │   ├── AddBook.jsx
│   │   ├── BookDetails.jsx
│   │   ├── BrowseBooks.jsx
│   │   ├── CategoryCard.jsx
│   │   ├── CategoryPage.jsx
│   │   ├── Header.jsx
│   │   └── LandingPage.jsx
│   ├── utils/            # Redux store, slices, and other helpers
│   │   ├── appStore.js
│   │   ├── BooksData.js
│   │   └── BooksSlice.jsx
│   ├── App.jsx           # Main application component with routing
│   ├── main.jsx          # Entry point of the application
│   └── index.css         # Global styles
├── .eslintrc.cjs         # ESLint configuration
├── package.json          # Project dependencies and scripts
└── vite.config.js        # Vite configuration
```

## State Management with Redux

The application uses **Redux Toolkit** for centralized state management.

- **`appStore.js`**: Configures the Redux store.
- **`BooksSlice.jsx`**: Defines the state and reducers for managing books and categories.
  - **Initial State**: The store is initialized with an empty array for `books` and `categories`. The `LandingPage` component dispatches actions to populate the store from `BooksData.js` on the initial load.
  - **Actions**:
    - `addBook`: Adds a new book to the state.
    - `addCategory`: Adds a new category to the state.
    - `removeBook`: (Not currently used) Removes a book.
    - `updateBook`: (Not currently used) Updates a book.

## Routing

Routing is managed by **React Router v7**.

- **`App.jsx`**: The main `App` component sets up the routes.
- **Layout**: The `Header` component is part of the main layout and is displayed on all valid pages.
- **404 Handling**: A wildcard route `*` is set up to catch any invalid URLs. It renders a custom `Error` component that displays the invalid path and does **not** include the `Header`.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/steller520/React_Assignment_02.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd React_Assignment_02
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```

### Running the Application

To start the development server, run:

```sh
npm run dev
```

The application will be available at similar to  `http://localhost:5173` (or another port if 5173 is in use).

## Available Scripts

- `npm run dev`: Starts the development server with Hot Module Replacement (HMR).
- `npm run build`: Builds the application for production.
- `npm run lint`: Lints the project files using ESLint.
- `npm run preview`: Serves the production build locally for preview.
