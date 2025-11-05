import React, { useEffect, useState } from 'react'
import BookDetails from './BookDetails';
import { useDispatch, useSelector } from 'react-redux';
import appStore from '../utils/appStore';
import { addBook, addCategory } from '../utils/BooksSlice';
import findImageUrl from '../utils/findImageUrl';
useDispatch
function AddBook() {
  const dispatch = useDispatch();

  const booksdata = useSelector((store) => store.books);
  const books = booksdata?.books || [];
  const booksCategories = booksdata?.categories || [];

  console.log("Books data from Redux store:", booksdata);

  const [newBook, setNewBook] = useState(null);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("Form submitted:", e.target[0].value, e.target[1].value, e.target[2].value);
    // alert("Book added successfully!");
    let Book = addNewBook(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value);
    setNewBook(Book);
    e.target.reset();
  };

  function addNewBook(title, author, genre, description) {
    return {
      id: books.findLast(book => true)?.id + 1 || books.length + 1,
      title: title,
      author: author,
      categoryId: booksCategories.find(cat => cat.name.toLowerCase() === genre.toLowerCase())?.id || null,
      img: findImageUrl(title),
      description: description,
      price: 15.00,
      isbn: `978-1-23456-${books.length + 1}-0`,
      rating: 4.0
    };
  }


  useEffect(() => {
    if (newBook) {
      console.log("New Book to be added:", newBook);
      dispatch(addBook(newBook));
      // Check and add category if it doesn't exist
      const categoryExists = booksCategories.some(cat => cat.id === newBook.categoryId);
      if (!categoryExists && newBook.categoryId !== null) {
        const newCategory = {
          id: newBook.categoryId,
          name: newBook.categoryId ? newBook.categoryId : 'Uncategorized'
        };
        console.log("Adding new category:", newCategory);
        dispatch(addCategory(newCategory));
      }
    }
  }, [newBook]);



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
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
            
            <form id='addBookForm' onSubmit={handleSubmitForm} className="space-y-6">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Book Title</label>
                <input
                  type="text"
                  placeholder="Enter book title"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  required
                />
              </div>
              
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Author</label>
                <input
                  type="text"
                  placeholder="Enter author name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  required
                />
              </div>
              
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Genre</label>
                <input
                  type="text"
                  placeholder="Enter genre"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  required
                />
              </div>
              
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea 
                  name="description" 
                  id="description" 
                  placeholder="Enter book description"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-vertical"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
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
                  <BookDetails book={newBook} />
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
  )
}


export default AddBook;