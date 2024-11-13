import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlXtxn9tszJ59D0xQ0mo-7OvC7hZHgd_g",
  authDomain: "loginpage-5be0b.firebaseapp.com",
  projectId: "loginpage-5be0b",
  storageBucket: "loginpage-5be0b.firebasestorage.app",
  messagingSenderId: "647743554360",
  appId: "1:647743554360:web:c39345dc37fec50045f7cd",
  measurementId: "G-J8D7XQQE92"
};

export const app = initializeApp(firebaseConfig);

const auth = getAuth();

function SignUpPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setphone] = useState('');
    const [country, setCountry] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        const password = "Firebase123"
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                // ...

                const userData = {
                    UID: userCredential.user.user_id,
                    name,
                    email,
                    username,
                    phone,
                    country,
                };

                
                try {
                    const response = await fetch("http://localhost:5000/api/auth/signup", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(userData)
                    });
        
                    const data = await response.json();
        
                    if (response.ok) {
                        console.log("Signup successful:", data);
                    } else {
                        console.log("Signup failed:", data);
                    }
                } catch (error) {
                    console.error("Error:", error);
                }

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
        // try {
        //     const response = await fetch("http://localhost:5000/api/auth/signup", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(userData)
        //     });

        //     const data = await response.json();

        //     if (response.ok) {
        //         console.log("Signup successful:", data);
        //     } else {
        //         console.log("Signup failed:", data);
        //     }
        // } catch (error) {
        //     console.error("Error:", error);
        // }
    };


    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-10 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="border border-gray-300 rounded-md p-2 w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="border border-gray-300 rounded-md p-2 w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="border border-gray-300 rounded-md p-2 w-full"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            className="border border-gray-300 rounded-md p-2 w-full"
                            value={phone}
                            onChange={(e) => setphone(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">
                            Country
                        </label>
                        <input
                            type="text"
                            id="country"
                            className="border border-gray-300 rounded-md p-2 w-full"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        />
                    </div>

                    <Link to="/">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                    >
                        Sign Up
                    </button>
                    </Link>

                    <Link to="/login">
                        <div className='mt-2 text-blue-600 hover:underline'>Already have an account Login</div>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default SignUpPage;