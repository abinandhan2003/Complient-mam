import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Crateform from '../Newform/Crateform';

function Mainform() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showPopup, setShowPopup] = useState(false); // State for the popup
    const dropdownRef = useRef(null);
    const popupRef = useRef(null);

    // Function to toggle the dropdown visibility
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    // Function to handle click outside of the dropdown or popup
    const handleClickOutside = (event) => {
        if (
            (dropdownRef.current && !dropdownRef.current.contains(event.target)) &&
            (popupRef.current && !popupRef.current.contains(event.target))
        ) {
            setShowDropdown(false);
            setShowPopup(false);
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

    // Function to toggle the popup visibility
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className='flex gap-5 flex-wrap'>
            <div className='md:w-72 w-full rounded-lg bg-white flex flex-col p-4 hover:shadow-md transition-all duration-200'>
                <div className='bg-gradient-to-r from-[#ffccf3] to-[#ffb7ba] w-full h-36 rounded-lg'></div>
                <span class="inline-flex items-center w-min mt-3 rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 gap-1"> <div className='rounded-full h-1 w-1 bg-green-700'></div> Active</span>
                <div className='flex justify-between mt-2'>
                    <div className='font-semibold text-xl'> Form Title </div>
                    <div className="relative" ref={dropdownRef}>
                        {/* Menu SVG */}
                        <div onClick={toggleDropdown} className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75.75 0 0 1 0 1.5Z" />
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

                <div className='flex justify-between items-center mt-2'>
                    <div>
                        {/* <div>Response</div> */}
                        <div>45</div>
                    </div>

                    <Link to="/process">
                        <button
                            type="button"
                            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 transition-all duration-30000"
                        >
                            Open
                        </button>
                    </Link>
                </div>
            </div>

            {/* New Form */}
            <div
                id='newform'
                className='md:w-72 w-full rounded-lg bg-white flex flex-col justify-center items-center p-4 hover:shadow-md transition-all duration-200 cursor-pointer'
                onClick={togglePopup}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>

                <div className='text-3xl mt-1'>New Form</div>
            </div>

            {/* Popup */}
            {showPopup && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                >
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg w-96"
                        ref={popupRef}
                    >

                        <Crateform />
                        <div className="flex justify-end space-x-4">
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                                onClick={() => setShowPopup(false)}
                            >
                                Cancel
                            </button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Mainform;
