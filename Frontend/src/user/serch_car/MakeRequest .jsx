import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../common/Header';

const MakeRequest = () => {
    const { id: carId } = useParams();
    const [carDetails, setCarDetails] = useState({});
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [userId, setUserId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCarDetails();
        // Fetch user ID here or from wherever it's stored in your app
        const userIdFromStorage = localStorage.getItem('userId');
        console.log('User ID from storage:', userIdFromStorage);
        setUserId(userIdFromStorage);
    }, []);

    const fetchCarDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/cars/${carId}`);
            setCarDetails(response.data);
        } catch (error) {
            console.error('Error fetching car details:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log('User ID before request:', userId);
        try {
            const response = await axios.post(`http://localhost:8080/car_reservations/123`, {
                userId,
                carId,
                startDate,
                endDate
            });
            window.alert("your request added....");
            console.log(response.data);
            navigate('/search_car');
        } catch (error) {
            console.error('Error making request:', error);
        }
    };

    return (
        <div>
            <Header />
            <div className="container mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">Make a Request</h2>

                <div>
                    <h3>Car Details</h3>
                    <p>Car Name: {carDetails.carName}</p>
                    <p>Rate: {carDetails.rate}</p>
                    <p>Fuel Type: {carDetails.fuelType}</p>
                    <p>Description: {carDetails.carDescription}</p>
                    <p>Seats: {carDetails.seats}</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="start_date" className="block font-medium mb-1">Start Date</label>
                        <input
                            type="date"
                            id="start_date"
                            className="border rounded px-4 py-2 w-full"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="end_date" className="block font-medium mb-1">End Date</label>
                        <input
                            type="date"
                            id="end_date"
                            className="border rounded px-4 py-2 w-full"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Add Request
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MakeRequest;
