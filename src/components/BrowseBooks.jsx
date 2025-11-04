import React, { useState } from 'react'
import booksData from '../utils/BooksData'
import BookDetails from './BookDetails';
import { FaSearch } from "react-icons/fa";


function BrowseBooks() {
  const [searchTerm, setSearchTerm] = useState('');

  const [filteredBooks, setFilteredBooks] = useState(booksData.books);

  const handleSearch = (term) => {
    console.log("Searching for:", term);
    setSearchTerm(term);
    const filtered = booksData.books.filter(book => 
      book.title.toLowerCase().includes(term.toLowerCase()) ||
      book.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredBooks(filtered);
  }
  return (
    <>
      <div className="flex mt-8 justify-between items-center p-6 border border-blue-200 rounded-2xl max-w-7xl mx-auto mb-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10">
        <h2 className="text-2xl font-semibold text-gray-700">Browse Books</h2>
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            onChange={(e) => handleSearch(e.target.value)}
            type="text"
            className="border border-gray-300 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            placeholder="Search Books..."
            value={searchTerm}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center max-w-8xl mx-auto min-h-screen bg-gray-50 py-8 px-4">
        {
          filteredBooks.map((book) => (
            <div key={book.id} className="max-w-sm mx-auto mb-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 overflow-hidden">
              <BookDetails book={book} />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default BrowseBooks