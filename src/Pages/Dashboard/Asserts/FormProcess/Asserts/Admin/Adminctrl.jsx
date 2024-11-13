import React, { useState } from 'react';

function Adminctrl() {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    role: '',
  });
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle Save button click
  const handleSave = () => {
    if (isEditing) {
      // Update the existing user data
      const updatedUsers = [...users];
      updatedUsers[editIndex] = formData;
      setUsers(updatedUsers);
      setIsEditing(false);
    } else {
      // Add new user data
      setUsers([...users, formData]);
    }
    setFormData({ name: '', title: '', email: '', role: '' }); // Clear form
    setShowModal(false); // Close modal
  };

  // Function to handle Edit button click
  const handleEdit = (index) => {
    setFormData(users[index]); // Load user data into form
    setEditIndex(index); // Save index for editing
    setIsEditing(true); // Set editing mode
    setShowModal(true); // Open modal
  };

  // Function to handle Delete button click
  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index); // Remove user
    setUsers(updatedUsers);
  };

  return (
    <div>
      <div className='text-3xl'>Admin list</div>

      <div className='w-64 py-3 bg-white rounded-xl flex justify-between items-center px-5 mt-5'>
        <div className='flex flex-col'>
          <div className='text-center'>{users.length}</div>
          <div>Admin</div>
        </div>

        <div className='flex items-center'>
          <svg
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
              d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
            />
          </svg>
        </div>
      </div>

      <div className='flex justify-between w-full mt-10 text-2xl'>
        <div>Add admin users to manage your account</div>

        {/* Add user button */}
        <div
          id='adduser'
          onClick={() => {
            setFormData({ name: '', title: '', email: '', role: '' }); // Clear form for new user
            setIsEditing(false); // Set to add mode
            setShowModal(true); // Open modal
          }}
          className='px-3 py-2 shadow flex flex-wrap justify-center items-center text-base bg-blue-200 rounded-md cursor-pointer'
        >
          Add User
        </div>
      </div>

      {/* Modal for adding/editing a user */}
      {showModal && (
        <div className='fixed inset-0 bg-white flex justify-center items-center'>
          <div className='bg-white p-6 rounded-md shadow-md w-96'>
            <h2 className='text-xl mb-4'>{isEditing ? 'Edit User' : 'Add New User'}</h2>

            <div className='flex flex-col space-y-3'>
              <input
                type='text'
                name='name'
                placeholder='Name'
                value={formData.name}
                onChange={handleInputChange}
                className='p-2 border rounded'
              />
              <input
                type='text'
                name='title'
                placeholder='Title'
                value={formData.title}
                onChange={handleInputChange}
                className='p-2 border rounded'
              />
              <input
                type='email'
                name='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleInputChange}
                className='p-2 border rounded'
              />
              <input
                type='text'
                name='role'
                placeholder='Role'
                value={formData.role}
                onChange={handleInputChange}
                className='p-2 border rounded'
              />
            </div>

            <div className='flex justify-end space-x-3 mt-4'>
              <button
                onClick={() => setShowModal(false)}
                className='px-4 py-2 bg-gray-300 rounded-md'
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className='px-4 py-2 bg-blue-500 text-white rounded-md'
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Table of users */}
      <div className='mt-8'>
        <table className='min-w-full table-auto bg-white'>
          <thead>
            <tr className='text-black border-b uppercase text-sm leading-normal'>
              <th className='py-3 px-6 text-left'>Name</th>
              <th className='py-3 px-6 text-left'>Title</th>
              <th className='py-3 px-6 text-left'>Email</th>
              <th className='py-3 px-6 text-left'>Role</th>
              <th className='py-3 px-6 text-left'>Edit</th>
              <th className='py-3 px-6 text-left'>Delete</th>
            </tr>
          </thead>
          <tbody className='text-gray-800 text-sm font-light'>
            {users.map((user, index) => (
              <tr key={index} className='border-b border-gray-200'>
                <td className='py-3 px-6 text-left'>{user.name}</td>
                <td className='py-3 px-6 text-left'>{user.title}</td>
                <td className='py-3 px-6 text-left'>{user.email}</td>
                <td className='py-3 px-6 text-left'>{user.role}</td>
                <td
                  className='py-3 px-6 text-left text-blue-500 hover:underline cursor-pointer'
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </td>
                <td
                  className='py-3 px-6 text-left text-red-500 hover:underline cursor-pointer'
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Adminctrl;
