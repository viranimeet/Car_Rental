// import React from 'react'

// const MyRequestsPage = () => {
//   return (
//     <div>MyRequestsPage</div>
//   )
// }

// export default MyRequestsPage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MyRequestsPage = () => {
//     const [requests, setRequests] = useState([]);

//     useEffect(() => {
//         fetchRequests();
//     }, []);

//     const fetchRequests = () => {
//         axios.get('http://localhost:8080/my_requests')
//             .then(response => {
//                 setRequests(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching requests:', error);
//             });
//     };

//     const handleAccept = (requestId) => {
//         axios.put(`http://localhost:8080/make_request/${requestId}/accept`)
//             .then(response => {
//                 fetchRequests(); // Refresh the list after updating status
//             })
//             .catch(error => {
//                 console.error('Error accepting request:', error);
//             });
//     };

//     const handleDecline = (requestId) => {
//         axios.put(`http://localhost:8080/make_request/${requestId}/decline`)
//             .then(response => {
//                 fetchRequests(); // Refresh the list after updating status
//             })
//             .catch(error => {
//                 console.error('Error declining request:', error);
//             });
//     };

//     return (
//         <div className="container">
//             <h2 className="mt-4 mb-4">My Requests</h2>
//             <table className="table">
//                 <thead className="thead-dark">
//                     <tr>
//                         <th>User name</th>
//                         <th>Car name</th>
//                         <th>Start Date</th>
//                         <th>End Date</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {requests.map(request => (
//                         <tr key={request.id}>
//                             <td>{request.userName}</td>
//                             <td>{request.carName}</td>
//                             <td>{request.startDate}</td>
//                             <td>{request.endDate}</td>
//                             <td>
//                                 <button onClick={() => handleAccept(request.id)} className="btn btn-success mr-2">
//                                     Accept
//                                 </button>
//                                 <button onClick={() => handleDecline(request.id)} className="btn btn-danger">
//                                     Decline
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default MyRequestsPage;
