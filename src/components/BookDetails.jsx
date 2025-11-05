import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { CiStar } from "react-icons/ci";

// This component displays the details of a single book
function BookDetails({ book }) {
    // Get the book ID from the URL parameters
    const { id } = useParams();
    // Get the book details and genre from the Redux store
    const bookDetails = useSelector((store) => {
        const currentBook = store.books.books.find((b) => b.id === parseInt(id));
        const genre = store.books.categories.find(cat => cat.id === currentBook?.categoryId)?.name || 'Unknown';
        return { book: currentBook, genre };
    });

    return (
        <div className='flex flex-col gap-4 items-center justify-center min-h-screen'>
            <div className=" max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Book Details for ID: {id}</h1>
                {bookDetails.book ? (
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">{bookDetails.book.title}</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">{bookDetails.book.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <p className="text-lg"><span className="font-semibold text-gray-700">Author:</span> <span className="text-gray-600">{bookDetails.book.author}</span></p>
                            <p className="text-lg"><span className="font-semibold text-gray-700">Genre:</span> <span className="text-gray-600">{bookDetails.genre}</span></p>
                            <p className="text-lg"><span className="font-semibold text-gray-700">Price:</span> <span className="text-green-600 font-bold">${bookDetails.book.price}</span></p>
                            <p className="text-lg"><span className="font-semibold text-gray-700">ISBN:</span> <span className="text-gray-600">{bookDetails.book.isbn}</span></p>
                            <p className="text-lg flex items-center"><span className="font-semibold text-gray-700">Rating:</span> <span className="text-yellow-500 font-bold"> {bookDetails.book.rating}</span><CiStar className="text-yellow-500 font-bold" /></p>
                        </div>
                    </div>
                ) : (
                    <p className="text-xl text-red-500 text-center">Book not found</p>
                )}
            </div>
            <Link to="/browse" className=" bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200 shadow-md hover:shadow-lg">
                Back to Browse
            </Link>
        </div>
    )
}

export default BookDetails