import React, { useState } from 'react';
import Profile from './img/profile.avif';

function ProcessUpdate() {
    const [inputValue, setInputValue] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);

    const handleUpdate = () => {
        alert('Updated!');
    };

    const handleCompletion = () => {
        setIsCompleted(true);
    };

    return (
        <div className="flex flex-col items-center p-6">
            {/* User Profile */}
            <div className="flex flex-col items-center mb-8">
            <img src={Profile} alt="Profile" className='rounded-full w-42 h-24' />  
                <p className="text-lg font-semibold mt-4">Lourn Name</p>
                <p className="text-gray-500">lourn77@gmail.com</p>
            </div>

            {/* Timeline */}
            <div className="relative flex flex-col items-start">
                {/* Vertical Line */}
                <div className="absolute left-5 top-0 h-full w-px bg-gray-300" />

                {/* Started */}
                <div className="flex items-center mb-6 relative">
                    <div >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 text-green-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>

                    </div>
                    <div className="ml-4">
                        <p className="font-semibold">Started</p>
                        <p className="text-gray-500">Complaint Title</p>
                    </div>
                </div>

                {/* Complaint Accepted */}
                <div className="flex items-center mb-6 relative">
                    <div >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 text-green-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>

                    </div>
                    <div className="ml-4">
                        <p className="font-semibold">Complaint Accepted</p>
                    </div>
                </div>

                {/* Processing */}
                <div className="flex items-center mb-6 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 text-yellow-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    <div className="ml-4">
                        <p className="font-semibold">Processing</p>
                        <input
                            type="text"
                            placeholder="Enter update..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="border border-gray-400 rounded p-2 mt-2 w-64"
                        /> <br/>
                        <button
                            onClick={handleUpdate}
                            className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
                        >
                            Update
                        </button>
                    </div>
                </div>

                {/* Completion Check */}
                <div className="flex items-center mb-6 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 rounded-full">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                    </svg>

                    <div className="ml-4">
                        <p className="font-semibold">Is it completed?</p>
                        <button
                            onClick={handleCompletion}
                            className={`${isCompleted ? 'bg-green-500' : 'bg-gray-500'
                                } text-white px-4 py-2 rounded mt-2 hover:bg-green-600`}
                        >
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProcessUpdate;
