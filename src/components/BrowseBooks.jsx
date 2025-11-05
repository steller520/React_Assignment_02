import React, { useState, useEffect } from 'react'
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import BookTemplate from './BookTemplate';
import { setNewBookAdded } from '../utils/BooksSlice';


// This component displays all the books and allows searching
function BrowseBooks() {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');

  // Get books data from the Redux store
  const books = useSelector((store)=>store.books);

  const [filteredBooks, setFilteredBooks] = useState(books.books);

  // Update filteredBooks whenever books change in the Redux store or the search term changes
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredBooks(books.books);
    } else {
      const filtered = books.books.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  }, [books.books, searchTerm]);

  // When a new book is added, reverse the order to show it at the top
  useEffect(() => {
    if(books.newBookAdded) {
      let reversedBooks = [...books.books].reverse();
      setFilteredBooks(reversedBooks);
      dispatch(setNewBookAdded(false));
    }else {
      return;
    }
  }, [books.newBookAdded]);

  // Handle search input changes
  const handleSearch = (term) => {
    console.log("Searching for:", term);
    setSearchTerm(term);
  }
  
  return (
    <>
      <div className="flex mt-8 justify-between items-center p-6 border border-blue-200 rounded-2xl max-w-7xl mx-auto mb-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10">
        <h2 className="text-2xl font-semibold text-gray-700">Browse Books</h2>
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            id='searchbooks'
            onChange={(e) => handleSearch(e.target.value)}
            type="text"
            className="border border-gray-300 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            placeholder="Search Books..."
            value={searchTerm}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-8xl mx-auto min-h-screen bg-gray-50 py-8 px-4">
        {
          filteredBooks.map((book) => (
            <div key={book.id} className="w-full max-w-sm mx-auto mb-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 overflow-hidden">
              <BookTemplate book={book} />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default BrowseBooks