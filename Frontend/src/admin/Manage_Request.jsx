import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header_Admin from './Header_Admin';

const Manage_Request = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/pending-requests');
            setReservations(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleAccept = (requestId) => {
        console.log("handel accept request id:" + requestId);
        axios.put(`http://localhost:8080/${requestId}/accept`)
            .then(response => {
                fetchData();
            })
            .catch(error => {
                console.error('Error accepting request:', error);
            });
    };

    const handleDecline = (requestId) => {
        console.log("hande decline request id:" + requestId);
        axios.put(`http://localhost:8080/${requestId}/decline`)
            .then(response => {
                fetchData();
            })
            .catch(error => {
                console.error('Error declining request:', error);
            });
    };

    return (
        <div>
            <Header_Admin />
            <div className="container">
                <h1 className="mt-4 mb-4 text-center">All pending Requests</h1>

                <table className="table table-striped mb-20 mt-10 table-bordered text-center w-full">
                    <thead className="thead-dark ">
                        <tr>
                            <th>User name</th>
                            <th>Car name</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map((reservation) => (

                            <tr key={reservation.id} >
                                <td>{reservation.userEmail}</td>
                                <td>{reservation.carName}</td>
                                <td>{reservation.startDate}</td>
                                <td>{reservation.endDate}</td>
                                <td>
                                    <button onClick={() => handleAccept(reservation.id)}
                                        className="btn btn-success mr-2 bg-blue-500 text-white px-2 py-1 rounded"
                                    >
                                        Accept
                                    </button>

                                    <button onClick={() => handleDecline(reservation.id)}
                                        className="btn btn-danger bg-red-500 text-white px-2 py-1 rounded mr-2"
                                    >
                                        Decline
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Manage_Request;