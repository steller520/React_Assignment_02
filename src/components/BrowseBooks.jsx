import React from 'react'
import booksData from '../utils/BooksData'
import BookDetails from './BookDetails';

function BrowseBooks() {
  const books = booksData.books;
  return (
    <div className="flex flex-wrap justify-center min-h-screen bg-gray-50 py-8 px-4">
      {
        books.map((book) => (
          <div key={book.id} className="max-w-sm mx-auto mb-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 overflow-hidden">
            <BookDetails book={book} />
          </div>
        ))
      }
    </div>
  )
}

export default BrowseBooks