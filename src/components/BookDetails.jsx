import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function BookDetails({ book }) {
    const { id } = useParams();
    useSelector
    const bookDetails = useSelector((store) => store.books.books.find((b) => b.id === parseInt(id)));

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className=" max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Book Details for ID: {id}</h1>
                {bookDetails ? (
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">{bookDetails.title}</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">{bookDetails.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <p className="text-lg"><span className="font-semibold text-gray-700">Author:</span> <span className="text-gray-600">{bookDetails.author}</span></p>
                            <p className="text-lg"><span className="font-semibold text-gray-700">Genre:</span> <span className="text-gray-600">{bookDetails.genre}</span></p>
                            <p className="text-lg"><span className="font-semibold text-gray-700">Price:</span> <span className="text-green-600 font-bold">${bookDetails.price}</span></p>
                            <p className="text-lg"><span className="font-semibold text-gray-700">ISBN:</span> <span className="text-gray-600">{bookDetails.isbn}</span></p>
                            <p className="text-lg"><span className="font-semibold text-gray-700">Rating:</span> <span className="text-yellow-500 font-bold">{bookDetails.rating}</span></p>
                        </div>
                    </div>
                ) : (
                    <p className="text-xl text-red-500 text-center">Book not found</p>
                )}
            </div>
        </div>
    )
}

export default BookDetails