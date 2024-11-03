import React, { useState, useEffect, useRef } from 'react';

function Mainform() {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null); // Reference for the dropdown

    // Function to toggle the dropdown visibility
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    // Function to handle click outside of the dropdown
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };

    // Add event listener when the component mounts
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='flex gap-5 flex-wrap'>
            <div className='w-80 rounded-lg bg-white flex flex-col p-4 hover:shadow-md transition-all duration-200'>
                <div className='bg-gradient-to-r from-[#ffccf3] to-[#ffb7ba] w-full h-44 rounded-lg'></div>
                <div className='flex justify-between mt-4'>
                    <div className='font-semibold text-xl'> Form Title </div>
                    <div className="relative" ref={dropdownRef}>
                        {/* Menu SVG */}
                        <div onClick={toggleDropdown} className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                            </svg>
                        </div>

                        {/* Dropdown Menu */}
                        {showDropdown && (
                            <div className="absolute top-full mt-2 right-0 w-40 bg-white border rounded-lg shadow-lg z-10">
                                <ul className="text-sm text-gray-700">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">View</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Invite</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Delete</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <div className='flex justify-between items-center mt-4'>
                    <div>
                        <div>Response</div>
                        <div>45</div>
                    </div>
                    <button
                        type="button"
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 transition-all duration-30000"
                    >
                        Open
                    </button>
                </div>
            </div>

            {/* New Form */}
            <div className='w-80 rounded-lg bg-white flex flex-col justify-center items-center p-4 hover:shadow-md transition-all duration-200'>
                <svg
                    id='menusvg'
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                    />
                </svg>
                <div>New Form</div>
            </div>
        </div>
    );
}

export default Mainform;
