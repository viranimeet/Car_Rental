import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header_Admin from './Header_Admin';

const Manage_Car = () => {
    const [cars, setCars] = useState([]);
    
    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        try {
            const response = await axios.get('http://localhost:8080/all_cars');
            setCars(response.data);
        } catch (error) {
            console.error('Error fetching cars:', error);
        }
    };

    const handleDelete = async (carId, carName) => {
        const confirmDelete = window.confirm(`Are you sure you want to delete ${carName} car?`);
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:8080/delete_car/${carId}`);
                fetchCars();
            } catch (error) {
                console.error('Error deleting car:', error);
            }
        }
    };

    return (
        <div>
            <div>
                <Header_Admin />
            </div>
            <h1 className="text-2xl font-semibold mb-4">Manage Cars Details</h1>

            <Link to="/add_car" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 justify-center">
                Add Car
            </Link>

            <div className="grid grid-cols-3 gap-4">
                {cars.map((car) => (
                    <div key={car.id} className="bg-white rounded shadow-md p-4">
                        <h2 className="text-lg font-semibold mb-2">{car.carName}</h2>
                        <p>Number of Seats: {car.seats}</p>
                        <p>Rate: {car.rate}</p>

                        <div className="mt-2">
                            <button
                                onClick={() => handleDelete(car.id, car.carName)}
                                className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                            >
                                Delete
                            </button>

                            <Link
                                to={`/edit_car/${car.id}`}
                                className="bg-blue-500 text-white px-2 py-1 rounded"
                            >
                                Edit
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Manage_Car;
