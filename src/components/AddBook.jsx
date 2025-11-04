import React from 'react'
import BookDetails from './BookDetails';

function AddBook() {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    alert("Book added successfully!");
  };
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