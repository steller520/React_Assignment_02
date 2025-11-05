import React from 'react'
import { Link } from 'react-router-dom'

// This component displays a single category as a clickable card
function CategoryCard({ category }) {
return (
    // Link to the specific category page
    <Link to={`/category/${category.id}`}>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all ease-in-out duration-300 transform hover:scale-105">
            {category.name}
        </button>
    </Link>
)
}

export default CategoryCard
