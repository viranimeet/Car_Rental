import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { useNavigate } from 'react-router-dom';
import Header from '../common/Header';


const Sign_up = () => {
    // State variables to store input values
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Create a data object with user input
        const data = {
            email,
            password,
            confirmPassword
        };

        try {
            // Send a POST request to the backend endpoint (/signup)
            const response = await axios.post('http://localhost:8080/signup', data);

            // Handle successful signup
            alert(response.data); // Show success message
            // After successful signup, navigate to the login page
            navigate('/login');
        } catch (error) {
            // Handle error
            alert("Signup failed. Please try again."); // Show error message
            console.error(error); // Log the error for debugging
        }
    };
    return (
        <>
            <Header />

            <div class="w-full mt-20 mb-20 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-sky-950">
                <div class="px-6 py-4">
                    <div class="flex justify-center mx-auto">
                        <img class="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
                    </div>

                    <h3 class="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

                    <p class="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

                    <form onSubmit={handleSubmit}>
                        <div class="w-full mt-4">
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                class="block w-full px-4 py-2 mt-2 text-gray-100 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                                type="email"
                                placeholder="Email Address"
                                aria-label="Email Address"
                                required
                            />
                        </div>

                        <div class="w-full mt-4">
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                class="block w-full px-4 py-2 mt-2 text-gray-100 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                                type="password"
                                placeholder="Password"
                                aria-label="Password"
                                required
                            />
                        </div>

                        <div class="w-full mt-4">
                            <input
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                class="block w-full px-4 py-2 mt-2 text-gray-100 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                                type="password"
                                placeholder="confirm Password"
                                aria-label="confirm Password"
                                required
                            />
                        </div>

                        <div class="flex items-center justify-between mt-4">
                            {/* <a href="#" class="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a> */}

                            <button
                                type="submit"
                                class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>

                <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                    <span class="text-sm text-gray-600 dark:text-gray-200">
                        Already have a account
                    </span>

                    <a href="/login" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">
                        Login
                    </a>
                </div>
            </div>
        </>
    )
}

export default Sign_up;