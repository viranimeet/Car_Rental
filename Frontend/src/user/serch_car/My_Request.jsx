import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../common/Header';

const My_Request = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const fetchUserRequests = async () => {
            try {
                const userId = localStorage.getItem('userId');
                if (!userId) {
                    throw new Error('User ID not found in local storage');
                }
                const response = await axios.get(`http://localhost:8080/user/${userId}/reservations`);
                setRequests(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        const checkAuthentication = () => {
            const userId = localStorage.getItem('userId');
            setIsLoggedIn(!!userId);
        };

        checkAuthentication();
        if (isLoggedIn) {
            fetchUserRequests();
        }
    }, [isLoggedIn]);

    if (!isLoggedIn) {
        return (
            <div>
                <Header />
                <div className="container mx-auto">
                    <h1 className="mt-4 mb-4 text-center text-3xl font-bold">My Requests</h1>
                    <p className="text-center">Please log in to view your requests.</p>
                </div>
            </div>
        );
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <Header />
            <div className="container mx-auto">
                <h1 className="mt-4 mb-4 text-center text-3xl font-bold">My Requests</h1>
                <table className="table-auto mb-20 mx-auto border-collapse border border-gray-800">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="py-2 px-4">Car Name</th>
                            <th className="py-2 px-4">Start Date</th>
                            <th className="py-2 px-4">End Date</th>
                            <th className="py-2 px-4">Car Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request) => (
                            <tr key={request.id} className="border-b border-gray-400">
                                <td className="py-2 px-4">{request.carName}</td>
                                <td className="py-2 px-4">{request.startDate}</td>
                                <td className="py-2 px-4">{request.endDate}</td>
                                <td className="py-2 px-4">
                                    <span className={
                                        request.status === 'accepted' ? 'text-green-600' :
                                        request.status === 'rejected' ? 'text-red-600' :
                                        'text-blue-600'
                                    }>
                                        {request.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default My_Request;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from '../common/Header';

// const My_Request = () => {
//     const [requests, setRequests] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchUserRequests = async () => {
//             try {
//                 const userId = localStorage.getItem('userId');
//                 if (!userId) {
//                     throw new Error('User ID not found in local storage');
//                 }
//                 const response = await axios.get(`http://localhost:8080/user/${userId}/reservations`);
//                 setRequests(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 setError(error);
//                 setLoading(false);
//             }
//         };

//         fetchUserRequests();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error.message}</div>;
//     }

//     return (
//         <div>
//             <Header />
//             <div className="container mx-auto">
//                 <h1 className="mt-4 mb-4 text-center text-3xl font-bold">My Requests</h1>
//                 <table className="table-auto mb-20 mx-auto border-collapse border border-gray-800">
//                     <thead>
//                         <tr className="bg-gray-800 text-white">
//                             <th className="py-2 px-4">Car Name</th>
//                             <th className="py-2 px-4">Start Date</th>
//                             <th className="py-2 px-4">End Date</th>
//                             <th className="py-2 px-4">Car Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {requests.map((request) => (
//                             <tr key={request.id} className="border-b border-gray-400">
//                                 <td className="py-2 px-4">{request.carName}</td>
//                                 <td className="py-2 px-4">{request.startDate}</td>
//                                 <td className="py-2 px-4">{request.endDate}</td>
//                                 <td className="py-2 px-4">
//                                     <span className={
//                                         request.status === 'accepted' ? 'text-green-600' :
//                                         request.status === 'rejected' ? 'text-red-600' :
//                                         'text-blue-600'
//                                     }>
//                                         {request.status}
//                                     </span>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default My_Request;
