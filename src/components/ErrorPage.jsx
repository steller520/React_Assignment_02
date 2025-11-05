import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

// This component is displayed when a route is not found (404 error)
function ErrorPage() {
    // Get error information from the router
    const error = useRouteError();
    console.error("Error occurred:", error);
return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md mx-auto">
            <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
            {/* Display the invalid path */}
            <p className="mt-4 text-lg text-gray-600 mb-6">
                The page "{window.location.pathname}" could not be found.
            </p>
            {/* Display the error message */}
            <p className="text-sm text-gray-500 mb-6">
                {error?.statusText || error?.message}
            </p>
            {/* Link to go back to the home page */}
            <Link 
                to="/" 
                className="inline-block px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
                Go Back Home
            </Link>
        </div>
    </div>
)
}

export default ErrorPage