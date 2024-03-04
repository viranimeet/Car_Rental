import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header_Admin from './Header_Admin';
import { Link } from 'react-router-dom';

const Add_Car = () => {
    const [carDetails, setCarDetails] = useState({
        carName: '',
        seats: '',
        rate: '',
        carDescription: '',
        fuelType: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarDetails(prevState => ({
            ...prevState,
            [name]: name === 'rate' ? parseFloat(value) : value
        }));
    };

    const [successMessage, setSuccessMessage] = useState('');
    const [visible, setVisible] = useState(true);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/add_car', carDetails);
            console.log(response.data);
            window.alert("car added successfully!");
            setCarDetails({
                carName: '',
                seats: '',
                rate: '',
                carDescription: '',
                fuelType: ''
            });
        } catch (error) {
            console.error('Error adding car:', error);
        }
        console.log(carDetails);
    };

    return (
        <div>
            <Header_Admin />
            <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                <div class="container max-w-screen-lg mx-auto">
                    <div>
                        <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div class="text-gray-600 just">
                                    <p class="font-medium text-lg">Add Car Details</p>
                                    <p>Please fill out all the fields.</p>
                                </div>

                                <div class="lg:col-span-2">
                                    <form >
                                        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div class="md:col-span-5">
                                                <label htmlFor="car_name">Car Name</label>
                                                <input
                                                    type="text"
                                                    name="carName"
                                                    id="car_name"
                                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    value={carDetails.carName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div class="md:col-span-5">
                                                <label htmlFor="no_of_seats">No. Of Seats</label>
                                                <input
                                                    type="text"
                                                    name="seats"
                                                    id="seats"
                                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    value={carDetails.seats}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div class="md:col-span-5">
                                                <label htmlFor="Rate">Rate</label>
                                                <input
                                                    type="text"
                                                    name="rate"
                                                    id="rate"
                                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    value={carDetails.rate}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div class="md:col-span-5">
                                                <label htmlFor="car_description">Car Description</label>
                                                <input
                                                    type="text"
                                                    name="carDescription"
                                                    id="car_description"
                                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    value={carDetails.carDescription}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div class="md:col-span-5">
                                                <label htmlFor="car_description">Fuel Type</label>
                                                <input
                                                    type="text"
                                                    name="fuelType"
                                                    id="fuel_type"
                                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    value={carDetails.fuelType}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="md:col-span-4 text-center">
                                                <div className="inline-flex items-end">
                                                    <button
                                                        type="submit"
                                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                        onClick={handleSubmit}
                                                    >
                                                        Add Car
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="md:col-span-4 text-center">
                                                <div className="inline-flex items-end">
                                                    <Link to="/manage_car"
                                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"

                                                    >
                                                        Back
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add_Car;