import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Searchprint = () => {
    const navigate = useNavigate();
    const [searach, setsearach] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');
    const token = localStorage.getItem('token');
    const [shareholderData, setShareholderData] = useState([])
    const [loading, setLoading] = useState(false);
    const [shareholderdetail, setShareholderdetail]=useState({})



    const handleSearch = async (e) => {
        console.log(searach)
        // console.log(token)
        console.log(localStorage.getItem('token'))
        e.preventDefault();
        setError('');  // Clear any previous errors
        setResult(null); // Clear previous result

        try {
            const response = await axios.get(`http://localhost:8080/api/admin/name/${searach}`, {
                headers: {
                    Authorization: `Bearer ${token}`  // Include the Bearer token in the request headers
                }
            });

            setResult(response.data); // Set result to display response data
            setShareholderData(response.data)
            console.log(response.data)
        }catch (err) {
            setError('No results found or an error occurred');
            console.error("Error fetching data:", err);
        }
    };


    const handleSearchphone = async (e) => {
        // console.log(searach)
        // console.log(token)
        console.log(localStorage.getItem('token'))
        e.preventDefault();
        setError('');  // Clear any previous errors
        setResult(null); // Clear previous result
//http://10.9.218.75:8085/api/authenticate
// http://localhost:8080/api/admin/phone/${searach}
        try {
            const response = await axios.get(`http://localhost:8080/api/admin/phone/${searach}`, {
                headers: {
                    Authorization: `Bearer ${token}`  // Include the Bearer token in the request headers
                }
            });

            setResult(response.data); // Set result to display response data
            console.log(response.data)
        }catch (err) {
            setError('No results found or an error occurred');
            console.error("Error fetching data:", err);
        }
    };


    const handleRowClick = async (person) => {
        setLoading(true);
        setShareholderdetail(person);
        console.log("the obj"+shareholderdetail.id)

        navigate('/assemblynah/Justprint', { state: { person } });
      
      };


      const handleAttendanceChange = async (id) => {
        try {
            // Get the current shareholder from state
            const shareholder = result.find(s => s.id === id);
    
            // Toggle the attendance value
            const newAttendance = shareholder.attendance === 1 ? 0 : 1;
    
            // Update the state locally (before making the API call)
            setResult(prevResult => 
                prevResult.map(shareholder =>
                    shareholder.id === id 
                        ? { ...shareholder, attendance: newAttendance } 
                        : shareholder
                )
            );
   
            // Make the API call to update attendance on the backend
            await axios.post(`http://localhost:8080/api/admin/attendance0/${id}`, 
                { attendance: newAttendance },
                {
                    headers: {
                        Authorization: `Bearer ${token}`  // Include the Bearer token in the request headers
                    }
                }
            );
         
    
            // Optionally, handle a success response
            console.log('Attendance updated successfully');
        } catch (error) {
            // Rollback the state update if the API request fails
            setResult(prevResult => 
                prevResult.map(shareholder =>
                    shareholder.id === id 
                        ? { ...shareholder, attendance: shareholder.attendance === 1 ? 0 : 1 } // Rollback if the API call fails
                        : shareholder
                )
            );
    
            // Handle the error
            console.error('Error updating attendance:', error);
        }
    };

    return (
        <div className="flex flex-col items-center  min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 my-24 bg-white rounded shadow-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800">Search For Printing</h2>

                <form onSubmit={isNaN(searach)?handleSearch:handleSearchphone} className="mt-4 space-y-4">
                    <div>
                     
                        <input
                            type="text"
                            id="phone"
                            value={searach}
                            onChange={(e) => setsearach(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border rounded focus:outline-none focus:ring focus:ring-indigo-300"
                            placeholder=" Please enter id or name or phone"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white hover:text-black bg-custom-yellow rounded hover:bg-amber-500"
                    >
                        Search
                    </button>
                </form>

                {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
               
            </div>
            {result && (
                    <div className="mt-4 p-4 bg-gray-100 rounded">
                        <h3 className="text-lg font-medium text-gray-800">Search Result:</h3>
                        {/* <pre className="text-sm text-gray-700">{JSON.stringify(result, null, 2)}</pre> */}
                        <table className="min-w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100 border-b border-gray-300">
                            <th className="px-4 py-2 text-left font-semibold">ID</th>
                            <th className="px-4 py-2 text-left font-semibold">Name (Amharic)</th>
                            <th className="px-4 py-2 text-left font-semibold">Name (English)</th>
                            <th className="px-4 py-2 text-left font-semibold">shareholder Id</th>
                            <th className="px-4 py-2 text-left font-semibold">Phone</th>
                            <th className="px-4 py-2 text-left font-semibold">Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result.map((shareholder) => (
                            <tr key={shareholder.id} className={shareholder.attendance===1?`bg-green-300 border-b border-gray-300`:"border-b border-gray-300"}
                            
                            >
                                <td onClick={() => handleRowClick(shareholder)} className="px-4 py-2">{shareholder.id}</td>
                                <td  onClick={() => handleRowClick(shareholder)}className="px-4 py-2">{shareholder.nameamh}</td>
                                <td  onClick={() => handleRowClick(shareholder)}className="px-4 py-2">{shareholder.nameeng}</td>
                                <td  onClick={() => handleRowClick(shareholder)}className="px-4 py-2">{shareholder.share_holder_id}</td>
                                <td  onClick={() => handleRowClick(shareholder)}className="px-4 py-2">{shareholder.phone}</td>
                                <td className={shareholder.attendance===1?` px-4 py-2`:"px-4 py-2"}>{shareholder.attendance===1?"Cheked In":" "}</td>
                                {/* <td className="px-4 py-2">
                <input 
                    type="checkbox" 
                    checked={shareholder.attendance === 1} // Check if attendance is 1 (checked in)
                    onChange={shareholder.attendance === 1?() => handleAttendanceChange(shareholder.id):() => handleRowClick(shareholder)} // Toggle attendance
                />
            </td> */}
             
                    </tr>
                        ))}
                    </tbody>
                </table>
                     
                    </div>
                )}
        </div>
    );
};

export default Searchprint
