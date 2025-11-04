import React, { use, useEffect } from 'react'
import BookDetails from './BookDetails';
import { useDispatch, useSelector } from 'react-redux';
import appStore from '../utils/appStore';
import { addBook, addCategory } from '../utils/BooksSlice';
useDispatch
function AddBook() {
  const dispatch = useDispatch();

  const booksCategories = useSelector((store) => store.books.categories);
  const books = useSelector((store) => store.books.books);
  
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("Form submitted:", e.target[0].value, e.target[1].value, e.target[2].value);
    alert("Book added successfully!");
    addNewBook(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value);
    e.target.reset();
  };

  useEffect(() => {
    function addNewBook(title, author, genre, description) {
      const newBook = {
        id: books.findLast(book => true)?.id + 1 || books.length + 1,
        title: title,
        author: author,
        categoryId: booksCategories.find(cat => cat.name.toLowerCase() === genre.toLowerCase())?.id || useDispatch(addCategory({ id: booksCategories.length + 1, name: genre })),
        img: findImageUrl(title),
        description: description,
        price: 15.00,
        isbn: `978-1-23456-${books.length + 1}-0`,
        rating: 4.0
      };
      dispatch(addBook(newBook));
    }
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold bg-blue-100 h-18 flex items-center justify-center mb-8 text-gray-800">Add a New Book</h1>
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Book Details</h2>
        <form onSubmit={handleSubmitForm} className="space-y-4">
          <input 
            type="text" 
            placeholder="Book Title" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="text" 
            placeholder="Author" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="text" 
            placeholder="Genre" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea name="description" id="description" placeholder="Add Description" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          <button 
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Add Book
          </button>
        </form>
        {/* {isTrue && <BookDetails />} */}
      </div>
    </div>
  )
}

export default AddBook