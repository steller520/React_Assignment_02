import React, { useEffect, useState } from 'react'
import booksData from '../utils/BooksData'
import { useParams } from 'react-router-dom';
import BookDetails from './BookDetails';
import { useSelector } from 'react-redux';

function CategoryPage() {
  const booksdata = useSelector((store)=>store.books);
  console.log("Books data from Redux store:", booksdata);
  // const [categories, setCategories] = useState(booksdata.categories);
  const [books, setBooks] = useState(booksdata.books);

  useEffect(() => {
    setBooks(booksdata.books);
  }, [ booksdata.books]);

  const { id } = useParams();

  console.log(books)
  const filteredCategories = books.filter(book => book.categoryId === parseInt(id));
  console.log("Filtered Categories:", filteredCategories);
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-8 border-b-2 border-blue-500 pb-4">
          Category: {filteredCategories.length > 0 ? booksData.categories.find(cat => cat.id === filteredCategories[0].categoryId).name : 'Not Found'}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            filteredCategories.map((book) => (
              <div key={book.id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 overflow-hidden">
                  <BookDetails book={book} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CategoryPage