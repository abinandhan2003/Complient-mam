import React, { useState } from 'react';

function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const [showHelpDropdown, setShowHelpDropdown] = useState(false);

    const toggleProfileDropdown = () => {
        setShowProfileDropdown(!showProfileDropdown);
    };

    const toggleHelpDropdown = () => {
        setShowHelpDropdown(!showHelpDropdown);
    };

    return (
        <div className="flex flex-col h-screen font-sans">
            {/* Top Bar */}
            <header className="bg-white text-gray-800 p-4 rounded-b-lg flex items-center justify-between z-10 md:pl-72">

                <div className="flex items-center space-x-4">
                    {/* Search Input */}
                    <div className="relative hidden md:block">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full focus:outline-none"
                        />
                        <svg
                            className="absolute top-2.5 right-3 h-5 w-5 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M15.5 10a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
                        </svg>
                    </div>
                </div>

                <div className="flex items-center space-x-6">
                    {/* Notification Icon */}
                    <button className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>

                    </button>
                    
                    {/* Help Icon with Dropdown */}
                    <button onClick={toggleHelpDropdown} className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                            <path d="M4.214 3.227a.75.75 0 0 0-1.156-.955 8.97 8.97 0 0 0-1.856 3.825.75.75 0 0 0 1.466.316 7.47 7.47 0 0 1 1.546-3.186ZM16.942 2.272a.75.75 0 0 0-1.157.955 7.47 7.47 0 0 1 1.547 3.186.75.75 0 0 0 1.466-.316 8.971 8.971 0 0 0-1.856-3.825Z" />
                            <path fillRule="evenodd" d="M10 2a6 6 0 0 0-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 0 0 .515 1.076 32.91 32.91 0 0 0 3.256.508 3.5 3.5 0 0 0 6.972 0 32.903 32.903 0 0 0 3.256-.508.75.75 0 0 0 .515-1.076A11.448 11.448 0 0 1 16 8a6 6 0 0 0-6-6Zm0 14.5a2 2 0 0 1-1.95-1.557 33.54 33.54 0 0 0 3.9 0A2 2 0 0 1 10 16.5Z" clipRule="evenodd" />
                        </svg>
                        {/* Help Dropdown */}
                        {showHelpDropdown && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                                <a href="#submit-feedback" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submit Feedback</a>
                                <a href="#contact-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact Us</a>
                            </div>
                        )}
                    </button>


                    {/* Profile Icon with Dropdown */}
                    <button onClick={toggleProfileDropdown} className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        {/* Profile Dropdown */}
                        {showProfileDropdown && (
                            <div className="absolute right-0 text-left mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                                <a href="#username" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> krishna@gmail.com</a>
                                <a href="#settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                                <a href="#my-account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Account</a>
                                <a href="#theme" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Theme</a>
                                <a href="#signout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Out</a>
                            </div>
                        )}
                    </button>


                    {/* Sidebar Toggle for Mobile */}
                    <button onClick={toggleSidebar} className="md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6 text-gray-800"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </header>

            <div className="flex flex-1 bg-gray-100">
                {/* Left Sidebar */}
                <aside className={`bg-white text-gray-900 w-64 p-6 fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:fixed md:block shadow-lg rounded-r-lg z-20`}>
                    <nav>
                        <ul className="space-y-4">

                            <div className='text-3xl mb-10'>
                                Sample Logo
                            </div>

                            {/* <!-- Dashboard --> */}
                            <li className="flex items-center space-x-3 py-2 hover:bg-gray-100 rounded-lg px-3 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                                    <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clip-rule="evenodd" />
                                </svg>
                                <a href="#dashboard" className="text-sm font-medium">Dashboard</a>
                            </li>

                            {/* <!-- My Profile --> */}
                            <li className="flex items-center space-x-3 py-2 hover:bg-gray-100 rounded-lg px-3 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                    <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                                </svg>
                                <a href="#profile" className="text-sm font-medium">My Profile</a>
                            </li>

                            {/* <!-- Settings Dropdown --> */}
                            <li className="flex flex-col space-y-2">
                                <div className="flex items-center space-x-3 py-2 hover:bg-gray-100 rounded-lg px-3 transition cursor-pointer" onClick={() => setShowSettingsDropdown(!showSettingsDropdown)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                        <path d="M13.024 9.25c.47 0 .827-.433.637-.863a4 4 0 0 0-4.094-2.364c-.468.05-.665.576-.43.984l1.08 1.868a.75.75 0 0 0 .649.375h2.158ZM7.84 7.758c-.236-.408-.79-.5-1.068-.12A3.982 3.982 0 0 0 6 10c0 .884.287 1.7.772 2.363.278.38.832.287 1.068-.12l1.078-1.868a.75.75 0 0 0 0-.75L7.839 7.758ZM9.138 12.993c-.235.408-.039.934.43.984a4 4 0 0 0 4.094-2.364c.19-.43-.168-.863-.638-.863h-2.158a.75.75 0 0 0-.65.375l-1.078 1.868Z" />
                                        <path fill-rule="evenodd" d="m14.13 4.347.644-1.117a.75.75 0 0 0-1.299-.75l-.644 1.116a6.954 6.954 0 0 0-2.081-.556V1.75a.75.75 0 0 0-1.5 0v1.29a6.954 6.954 0 0 0-2.081.556L6.525 2.48a.75.75 0 1 0-1.3.75l.645 1.117A7.04 7.04 0 0 0 4.347 5.87L3.23 5.225a.75.75 0 1 0-.75 1.3l1.116.644A6.954 6.954 0 0 0 3.04 9.25H1.75a.75.75 0 0 0 0 1.5h1.29c.078.733.27 1.433.556 2.081l-1.116.645a.75.75 0 1 0 .75 1.298l1.117-.644a7.04 7.04 0 0 0 1.523 1.523l-.645 1.117a.75.75 0 1 0 1.3.75l.644-1.116a6.954 6.954 0 0 0 2.081.556v1.29a.75.75 0 0 0 1.5 0v-1.29a6.954 6.954 0 0 0 2.081-.556l.645 1.116a.75.75 0 0 0 1.299-.75l-.645-1.117a7.042 7.042 0 0 0 1.523-1.523l1.117.644a.75.75 0 0 0 .75-1.298l-1.116-.645a6.954 6.954 0 0 0 .556-2.081h1.29a.75.75 0 0 0 0-1.5h-1.29a6.954 6.954 0 0 0-.556-2.081l1.116-.644a.75.75 0 0 0-.75-1.3l-1.117.645a7.04 7.04 0 0 0-1.524-1.523ZM10 4.5a5.475 5.475 0 0 0-2.781.754A5.527 5.527 0 0 0 5.22 7.277 5.475 5.475 0 0 0 4.5 10a5.475 5.475 0 0 0 .752 2.777 5.527 5.527 0 0 0 2.028 2.004c.802.458 1.73.719 2.72.719a5.474 5.474 0 0 0 2.78-.753 5.527 5.527 0 0 0 2.001-2.027c.458-.802.719-1.73.719-2.72a5.475 5.475 0 0 0-.753-2.78 5.528 5.528 0 0 0-2.028-2.002A5.475 5.475 0 0 0 10 4.5Z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm font-medium">Settings</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                                        <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                {showSettingsDropdown && (
                                    <ul className="ml-6 mt-2 space-y-2">
                                        <li><a href="#profile" className="text-sm font-medium hover:text-gray-800">Profile</a></li>
                                        <li><a href="#subscription" className="text-sm font-medium hover:text-gray-800">Subscription</a></li>
                                        <li><a href="#password" className="text-sm font-medium hover:text-gray-800">Password</a></li>
                                    </ul>
                                )}
                            </li>

                            {/* <!-- Help --> */}
                            <li className="flex items-center space-x-3 py-2 hover:bg-gray-100 rounded-lg px-3 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
                                </svg>
                                <a href="#help" className="text-sm font-medium">Help</a>

                            </li>
                        </ul>
                    </nav>
                </aside>


                {/* Main Content Area */}
                <main className="flex-1 p-8 overflow-auto md:ml-64">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Welcome to your Dashboard!</h2>
                        <p className="text-gray-600">Explore your data, track your analytics, and manage your settings here.</p>
                        {/* Additional content goes here */}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;