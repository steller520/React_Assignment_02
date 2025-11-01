import React from 'react'
import CategoryCard from './CategoryCard'
import { FaSearch } from "react-icons/fa";

function LandingPage() {
return (
    <div className='bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen'>
            <h1 className="text-4xl text-center font-bold p-8 text-gray-800 tracking-wide">Welcome to the Online Library</h1>
            <div className="flex justify-between items-center p-6 border border-blue-200 rounded-2xl max-w-6xl mx-auto mb-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
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
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 max-w-6xl mx-auto">
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
            </ul>
    </div>
)
}

export default LandingPage