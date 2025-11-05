import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook, addCategory, setNewBookAdded } from '../utils/BooksSlice';
import findImageUrl from '../utils/findImageUrl';
import BookTemplate from './BookTemplate';

// This component provides a form to add a new book to the library.
function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // --- State Declarations ---
  // State for the new book preview
  const [newBook, setNewBook] = useState(null);
  // State to hold validation errors
  const [errors, setErrors] = useState({});
  
  // --- Redux Store Data ---
  // Get books and categories from the Redux store
  const booksdata = useSelector((store) => store.books);
  const books = booksdata?.books || [];
  const booksCategories = booksdata?.categories || [];

  // --- Validation Logic ---
  // Validates the form fields and returns an object with any errors
  const validateForm = (title, author, genre, description) => {
    const newErrors = {};
    
    // Title validation
    if (!title.trim()) newErrors.title = 'Title is required';
    else if (title.trim().length < 2) newErrors.title = 'Title must be at least 2 characters';
    else if (title.trim().length > 100) newErrors.title = 'Title must be less than 100 characters';
    
    // Author validation
    if (!author.trim()) newErrors.author = 'Author is required';
    else if (author.trim().length < 2) newErrors.author = 'Author name must be at least 2 characters';
    else if (author.trim().length > 50) newErrors.author = 'Author name must be less than 50 characters';
    
    // Genre validation
    if (!genre.trim()) newErrors.genre = 'Genre is required';
    else if (genre.trim().length < 2) newErrors.genre = 'Genre must be at least 2 characters';
    else if (genre.trim().length > 30) newErrors.genre = 'Genre must be less than 30 characters';
    
    // Description validation
    if (!description.trim()) newErrors.description = 'Description is required';
    else if (description.trim().length < 10) newErrors.description = 'Description must be at least 10 characters';
    else if (description.trim().length > 500) newErrors.description = 'Description must be less than 500 characters';
    
    // Check for duplicate title
    if (books.some(book => book.title.toLowerCase().trim() === title.toLowerCase().trim())) {
      newErrors.title = 'A book with this title already exists';
    }
    
    return newErrors;
  };

  // --- Form Submission ---
  // Handles the form submission, validates the data, and adds the book
  const handleSubmitForm = (e) => {
    e.preventDefault();
    
    const title = e.target.elements.title.value;
    const author = e.target.elements.author.value;
    const genre = e.target.elements.genre.value;
    const description = e.target.elements.description.value;
    
    const validationErrors = validateForm(title, author, genre, description);
    
    // If there are validation errors, display them and stop
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setNewBook(null); // Clear preview if validation fails
      return;
    }
    
    // If validation passes, clear errors and add the book
    setErrors({});
    const book = addNewBook(title, author, genre, description);
    setNewBook(book); // Show preview
    
    // Dispatch actions to add the book and category to the Redux store
    dispatch(addBook(book));
    
    // Handle category
    const categoryExists = booksCategories.some(cat => cat.id === book.categoryId);
    if (!categoryExists) {
      const newCategory = {
        id: book.categoryId,
        name: book.categoryName,
      };
      dispatch(addCategory(newCategory));
    }
    dispatch(setNewBookAdded(true));
    // Navigate to the browse page after a short delay to show the preview
    setTimeout(() => {
      navigate('/browse');
    }, 2000); // 2-second delay before redirecting

    e.target.reset();
  };

  // --- Helper Functions ---
  // Creates a new book object
  function addNewBook(title, author, genre, description) {
    const matchedCategory = booksCategories.find(cat => cat.name.toLowerCase() === genre.toLowerCase());
    const nextCategoryId = matchedCategory
      ? matchedCategory.id
      : (booksCategories.length > 0 ? Math.max(...booksCategories.map(c => c.id)) + 1 : 1);

    return {
      id: (books.length > 0 ? Math.max(...books.map(b => b.id)) : 0) + 1,
      title,
      author,
      categoryId: nextCategoryId,
      categoryName: matchedCategory ? matchedCategory.name : genre,
      img: findImageUrl(title),
      description,
      price: 15.00,
      isbn: `978-1-23456-${books.length + 1}-0`,
      rating: 4.0
    };
  }

  // Renders a validation error message
  const renderError = (fieldName) => {
    if (errors[fieldName]) {
      return (
        <p className="text-red-500 text-sm mt-1 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {errors[fieldName]}
        </p>
      );
    }
    return null;
  };

  // --- JSX ---
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 bg-white rounded-lg shadow-sm py-6">
          Add a New Book
        </h1>
        
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Form Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center border-b border-gray-200 pb-4">
              Book Details
            </h2>
            
            <form id='addBookForm' onSubmit={handleSubmitForm} className="space-y-6" noValidate>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Book Title</label>
                <input
                  name="title"
                  type="text"
                  placeholder="Enter book title"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition duration-200 ${errors.title ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                />
                {renderError('title')}
              </div>
              
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Author</label>
                <input
                  name="author"
                  type="text"
                  placeholder="Enter author name"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition duration-200 ${errors.author ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                />
                {renderError('author')}
              </div>
              
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Genre</label>
                <input
                  name="genre"
                  type="text"
                  placeholder="Enter genre"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition duration-200 ${errors.genre ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                />
                {renderError('genre')}
              </div>
              
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea 
                  name="description" 
                  id="description" 
                  placeholder="Enter book description"
                  rows="4"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition duration-200 resize-vertical ${errors.description ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                />
                {renderError('description')}
              </div>
              
              <button
                type="submit"
                className="w-full bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Add Book
              </button>
            </form>
          </div>

          {/* Preview Section */}
          <div className="flex justify-center">
            {newBook ? (
              <div className="w-full max-w-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                  Book Preview
                </h3>
                <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <BookTemplate book={newBook} />
                </div>
              </div>
            ) : (
              <div className="w-full max-w-sm bg-white border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253z" />
                  </svg>
                </div>
                <p className="text-gray-500 font-medium">Book preview will appear here</p>
                <p className="text-gray-400 text-sm mt-2">Fill out the form to see your book</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
