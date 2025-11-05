import React, { use, useCallback, useEffect, useRef, useState } from 'react'
import CategoryCard from './CategoryCard'
import { FaSearch } from "react-icons/fa";
import booksData from '../utils/BooksData';
import { addBook, addCategory } from '../utils/BooksSlice';
import { useDispatch, useSelector } from 'react-redux';

function LandingPage() {
        // Get books data from Redux store
        const booksdata = useSelector((store)=>store.books);
        // Sync local categories state with Redux store
        // Lazy initialization of categories state
        const [categories, setCategories] = useState(booksdata?.categories ?? []);
        // Search term state
        const [searchTerm, setSearchTerm] = useState('');
        // Loading state
        const [isLoading, setIsLoading] = useState(()=>!booksdata || booksdata.categories.length === 0);
        // Initialization flag
        const didInitialize = useRef(false);

        // Sync local categories state with Redux store
        useEffect(() => {
                if (booksdata?.categories) {
                        setCategories(booksdata.categories);
                        setIsLoading(false);
                }
        }, [booksdata?.categories]);

        console.log("Books data from Redux store:", booksdata);
        
        const dispatch = useDispatch();
        // One-time initialization effect
        useEffect(()=>{
                // if we have already initialized, do nothing
                if(didInitialize.current) return;

                const storeHadCategories = Array.isArray(booksdata?.categories) && booksdata.categories.length > 0;
                const storeHasBooks = Array.isArray(booksdata?.books) && booksdata.books.length > 0;
                
                if(!storeHadCategories && !storeHasBooks) {
                        for (const category of booksData.categories) {
                                // console.log("Category in store:", category);
                                dispatch(addCategory(category));
                        }
                        for (const book of booksData.books) {
                                // console.log("Book in store:", book);
                                dispatch(addBook(book));
                        }
                }
                didInitialize.current = true;

        }, [dispatch]);

        console.log("Initial categories:", categories);
        

        const handleCategorySearch = (term) => {
                // console.log("Searching categories for:", term);
                setSearchTerm(term);
                const filtered = booksData.categories.filter(category =>
                        category.name.toLowerCase().includes(term.toLowerCase())
                );
                setCategories(filtered);
        }

       

        return ( isLoading ? <div className='border '>Loading...</div> :
                <div className='bg-linear-to-br from-blue-50 to-indigo-100 min-h-screen relative overflow-hidden'>
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
                                                onChange={(e)=>handleCategorySearch(e.target.value)}
                                                value={searchTerm}
                                                type="text"
                                                className="border border-gray-300 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                                                placeholder="Search categories..."
                                        />
                                </div>
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto relative z-10">
                                {
                                        categories.map(category => (
                                                <li key={category.id} className='flex justify-center items-center'>
                                                        <CategoryCard category={category} />
                                                </li>
                                        ))
                                }
                        </ul>
                </div>
        )
}

export default LandingPage