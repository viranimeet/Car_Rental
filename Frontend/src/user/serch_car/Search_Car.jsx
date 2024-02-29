import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../common/Header';

const Search_Car = () => {
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

    return (
        <div>
            <Header />
            <div>
                <h2 className="text-2xl font-semibold mb-4">Available Cars</h2>
                <div className="grid grid-cols-3 gap-4 mb-20">
                    {cars.map((car) => (
                        <div key={car.id} className="bg-white rounded shadow-md p-4">
                            <h2 className="text-lg font-semibold mb-2">{car.carName}</h2>
                            <p>Number of Seats: {car.seats}</p>
                            <p>Rate: {car.rate}</p>
                            <Link
                                to={`/make_request/${car.id}`}
                                className="bg-blue-500 text-white px-2 py-1 rounded mt-2 inline-block"
                            >
                                Make Request
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search_Car;
