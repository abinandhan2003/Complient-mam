import React, { useState } from 'react';

function Newrequest() {
  const [showModal, setShowModal] = useState(false);

  const handleViewClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAccept = () => {
    // Perform accept action here
    alert('Request accepted! and Send to Process');
    setShowModal(false);
  };

  return (
    <div className="">
      <div className="text-3xl">
        <div>New request list</div>

        {/* New request table */}
        <div className="overflow-x-auto mt-5">
          <table className="min-w-full table-auto bg-white">
            <thead>
              <tr className="text-black border-b uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Title</th>
                <th className="py-3 px-6 text-left">Description</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">View</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 text-sm font-light">
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left">Sample Title</td>
                <td className="py-3 px-6 text-left">Lorem ipsum dolor sit</td>
                <td className="py-3 px-6 text-left">lourm@gmail.com</td>
                <td className="py-3 px-6 text-left">Mr. Lourm</td>
                {/* View Button */}
                <td
                  className="py-3 px-6 text-left text-blue-500 hover:underline cursor-pointer"
                  onClick={handleViewClick}
                >
                  View
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs w-full">
              <p className="text-lg font-semibold mb-6 text-gray-700">
                Are you sure you want to accept this request?
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  className="text-base h-11 px-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition duration-150 ease-in-out"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button
                  className="text-base h-11 px-2 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-150 ease-in-out"
                  onClick={handleAccept}
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Newrequest;
