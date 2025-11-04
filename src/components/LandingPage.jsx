import React from 'react'
import CategoryCard from './CategoryCard'
import { FaSearch } from "react-icons/fa";
import booksData from '../utils/BooksData';
import { addBook } from '../utils/BooksSlice';
import { useDispatch } from 'react-redux';

function LandingPage() {
        console.log(booksData);
        const dispatch = useDispatch();
        for (let book of booksData.books) {
                console.log("Adding book:", book);
                dispatch(addBook(book));
        }
return (
        <div className='bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen relative overflow-hidden'>
                        {/* Book watermarks */}
                        <div className="absolute inset-0 pointer-events-none opacity-30">
                                <div className="absolute top-10 left-10 text-6xl transform rotate-12 text-gray-500">📚</div>
                                <div className="absolute top-32 right-20 text-5xl transform -rotate-12 text-blue-400">📖</div>
                                <div className="absolute top-80 left-32 text-4xl transform rotate-45 text-indigo-400">📕</div>
                                <div className="absolute bottom-40 right-40 text-6xl transform -rotate-45 text-purple-400">📘</div>
                                <div className="absolute bottom-20 left-20 text-5xl transform rotate-12 text-green-400">📗</div>
                                <div className="absolute top-60 right-60 text-4xl transform rotate-90 text-yellow-400">📙</div>
                                <div className="absolute top-20 left-1/2 text-5xl transform -rotate-30 text-red-400">📓</div>
                                <div className="absolute bottom-60 left-60 text-4xl transform rotate-60 text-pink-400">📔</div>
                                <div className="absolute top-1/2 right-10 text-6xl transform rotate-180 text-teal-400">📒</div>
                                <div className="absolute bottom-10 left-1/3 text-5xl transform -rotate-60 text-orange-400">📑</div>
                                <div className="absolute top-40 left-1/4 text-4xl transform rotate-30 text-cyan-400">📜</div>
                                <div className="absolute bottom-80 right-1/3 text-5xl transform -rotate-90 text-violet-400">📋</div>
                        </div>

                        <h1 className="text-4xl text-center font-bold p-8 text-gray-800 tracking-wide relative z-10">Welcome to the Online Library</h1>
                        <div className="flex justify-between items-center p-6 border border-blue-200 rounded-2xl max-w-6xl mx-auto mb-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10">
                                        <h2 className="text-2xl font-semibold text-gray-700">Browse Categories</h2>
                                        <div className="relative">
                                                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                        <input 
                                                                        type="text" 
                                                                        className="border border-gray-300 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm" 
                                                                        placeholder="Search categories..." 
                                                        />
                                        </div>
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 max-w-6xl mx-auto relative z-10">
                                {
                                                booksData.categories.map(category => (
                                                        <CategoryCard key={category.id} category={category} />
                                                ))
                                }
                        </ul>
        </div>
)
}

export default LandingPage