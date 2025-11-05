import React from 'react'
import { Link } from 'react-router-dom'
import { IoLibrary } from "react-icons/io5";

// The header component with navigation links
function Header() {
return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold flex items-center "> <IoLibrary className="animate-pulse inline-block mr-2 h-6 w-6" /> Online Library System</h1>
        <nav>
            <ul className="flex space-x-4 gap-12">
                    {/* Link to the Home page */}
                    <li>
                        <Link to="/" className="hover:text-blue-200 hover:underline transition-colors duration-200">Home</Link>
                    </li>
                    {/* Link to the Browse Books page */}
                    <li>
                        <Link to="/browse" id='browsebooks' className="hover:text-blue-200 hover:underline transition-colors duration-200">Browse Books</Link>
                    </li>
                    {/* Link to the Add Book page */}
                    <li>
                        <Link to="/addbook"  className="hover:text-blue-200 hover:underline transition-colors duration-200">Add Book</Link>
                    </li>
            </ul>
        </nav>
    </header>
)
}

export default Header