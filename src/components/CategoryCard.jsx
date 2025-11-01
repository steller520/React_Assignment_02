import React from 'react'
import { Link } from 'react-router-dom'

function CategoryCard() {
return (
    <Link to="/category/category-id">
        <div className="border border-gray-300 bg-white hover:scale-105 hover:bg-blue-100 transition-all ease-in-out duration-300 p-6 rounded-lg w-56 h-64 shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer">
            <span className="text-lg font-semibold text-gray-800 text-center">
                Fiction
            </span>
        </div>
    </Link>
)
}

export default CategoryCard
