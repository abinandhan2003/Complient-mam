import React from 'react'
import { Link } from 'react-router-dom';

function Formprocess() {

    const copyText = () => {
        const inputElement = document.getElementById("inputText");
        inputElement.select();
        inputElement.setSelectionRange(0, 99999); // For mobile devices

        navigator.clipboard
            .writeText(inputElement.value)
            .then(() => alert("Text copied to clipboard!"))
            .catch((err) => alert("Failed to copy text: " + err));
    };

    return (
        <div className='w-full'>

            {/* Form Tittle  */}
            <h1 className='text-3xl text-center'>
                Nexcap customer form
            </h1>

            <div className='flex gap-10 flex-wrap w-full justify-center mt-10'>

                {/* Admin control  */}

                <Link to="/process/admin">
                    <div className='w-64 py-3 bg-white rounded-xl shadow-md flex justify-between items-center px-5'>
                        <div className='flex flex-col'>
                            <div className='text-center'>
                                2
                            </div>
                            <div>Admin</div>
                        </div>

                        <div className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                            </svg>

                        </div>
                    </div>
                </Link>

                {/* Response  */}
                <div className='w-64 py-3 bg-white rounded-xl shadow-md flex justify-between items-center px-5'>
                    <div className='flex flex-col'>
                        <div className='text-center'>
                            128
                        </div>
                        <div>Response</div>
                    </div>

                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                        </svg>
                    </div>
                </div>

                {/* Other users  */}
                <div className='w-64 py-3 bg-white rounded-xl shadow-md flex justify-between items-center px-5'>
                    <div className='flex flex-col items-center justify-center'>
                        <div>
                            5
                        </div>
                        <div> Other users</div>
                    </div>

                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                    </div>
                </div>

            </div>

            {/* Share & post  */}
            <div className='text-center w-full'>
                <div className='text-3xl text-center mt-10'>
                    Share & Post
                </div>

                <div className='w-full flex justify-center mt-5 items-center gap-5'>
                    <div className="relative w-full max-w-md">

                        {/* Share link  */}
                        <input
                            type="text"
                            id="inputText"
                            className="w-full text-blue-700 p-3 pr-16 border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter text here"
                            value={"www.google.com/forms"}
                        />
                        <button
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-full flex justify-center items-center hover:bg-blue-600 transition-colors"
                            onClick={copyText}
                        >
                            Copy
                        </button>
                    </div>

                    {/* QR Svg  */}

                    <Link to="/qr">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                        </svg>
                    </Link>

                </div>
            </div>

            <div className='flex gap-10 flex-wrap w-full justify-center mt-10'>

                {/* New Request card  */}
                <Link to="/process/newrequest">
                    <div className='w-60 bg-blue-100 hover:shadow-md rounded-lg px-5 py-3'>


                        <div className='text-2xl'>
                            New request
                        </div>
                        <div className='mt-2'>
                            42
                        </div>

                        <div className='flex justify-between items-center mt-3'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>

                            <button
                                type="button"
                                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 transition-all duration-30000"
                            >
                                View
                            </button>
                        </div>

                    </div>
                </Link>

                <Link to="/process/processingcomp">
                    <div className='w-60 bg-yellow-100 hover:shadow-md rounded-lg px-5 py-3'>


                        <div className='text-2xl'>
                            Processing
                        </div>
                        <div className='mt-2'>
                            20
                        </div>

                        <div className='flex justify-between items-center mt-3'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>

                            <button
                                type="button"
                                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 transition-all duration-30000"
                            >
                                View
                            </button>
                        </div>

                    </div>
                </Link>

                <Link to="/process/completed">
                    <div className='w-60 bg-green-400 bg-opacity-25 hover:shadow-md rounded-lg px-5 py-3'>


                        <div className='text-2xl'>
                            Completed
                        </div>
                        <div className='mt-2'>
                            30
                        </div>

                        <div className='flex justify-between items-center mt-3'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                                </svg>
                            </div>

                            {/* Menu svg  */}
                            <button
                                type="button"
                                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 transition-all duration-30000"
                            >
                                View
                            </button>
                        </div>

                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Formprocess
