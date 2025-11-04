import React from 'react'

function BookDetails({ book }) {
    console.log("Book Details:", book);
    const handleReadMore = () => {
        alert(`Read more about: ${book.title}`);
    }
return (
    <>
        <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-blue-500 to-purple-600 p-4">
            <div className="flex items-center justify-center h-full">
                <h2 className="text-xl font-bold text-white text-center">{book.title}</h2>
            </div>
        </div>
        {book.img && (
            <div className="p-4">
                <img 
                    src={book.img} 
                    alt={book.title} 
                    className="w-full h-64 object-contain rounded-lg"
                />
            </div>
        )}
        <div className="p-6">
            <p className="text-gray-600 leading-relaxed mb-4">{book.description}</p>
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Book ID: {book.id}</span>
                <button onClick={handleReadMore} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200">
                    Read More
                </button>
            </div>
        </div>
    </>
)
}

export default BookDetails