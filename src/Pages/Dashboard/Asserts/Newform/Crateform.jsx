import React, { useState } from 'react';

function Crateform() {
    const [logo, setLogo] = useState(null);

    // Function to handle image upload
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setLogo(reader.result); // Save the image URL in state
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">New Complaint Form</h2>

            {/* Logo Upload Section */}
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                    {logo ? (
                        <img src={logo} alt="Logo" className="w-full h-full object-cover" />
                    ) : (
                        <span className="text-gray-400">Logo</span>
                    )}
                </div>
                <label className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
                    Upload
                    <input
                        type="file"
                        className="hidden"
                        onChange={handleImageUpload}
                    />
                </label>
            </div>

            {/* Company Name */}
            <label className="block text-gray-700 mb-2">Company Name</label>
            <input
                type="text"
                className="w-full border border-gray-300 px-3 py-2 rounded-lg mb-4 focus:outline-none focus:border-blue-500"
            />

            {/* Description */}
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
                className="w-full border border-gray-300 px-3 py-2 rounded-lg mb-4 focus:outline-none focus:border-blue-500"
                rows="4"
            ></textarea>

            {/* Website */}
            <label className="block text-gray-700 mb-2">Website</label>
            <input
                type="text"
                className="w-full border border-gray-300 px-3 py-2 rounded-lg mb-4 focus:outline-none focus:border-blue-500"
            />

            {/* Mail ID */}
            <label className="block text-gray-700 mb-2">Mail ID</label>
            <input
                type="email"
                className="w-full border border-gray-300 px-3 py-2 rounded-lg mb-4 focus:outline-none focus:border-blue-500"
            />
        </div>
    );
}

export default Crateform;
