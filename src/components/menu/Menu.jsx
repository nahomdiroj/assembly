import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation

const Menu = () => {
    const navigate = useNavigate();

    // Function to handle voting
    const handleVoting = () => {
        console.log("Voting clicked");
        // You can replace this with actual voting functionality
        navigate('/assemblynah/search'); // Navigate to the voting page
    };

    // Function to handle printing
    const handlePrint = () => {
        console.log("Print clicked");
        // You can replace this with actual print functionality
        navigate('/assemblynah/searchprint'); 
    };

    // Function to handle attendance
    const handleAttendance = () => {
        console.log("Attendance clicked");
        // You can replace this with actual attendance functionality
        navigate('/assemblynah/search'); // Navigate to the attendance page
    };

    return (
        <div className="w-64 bg-gray-800 text-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Menu</h2>
            <ul className="space-y-4">
                <li>
                    <button 
                        onClick={handleVoting}
                        className="w-full py-2 px-4 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-left focus:outline-none"
                    >
                        Voting
                    </button>
                </li>
                <li>
                    <button 
                        onClick={handlePrint}
                        className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 rounded-lg text-left focus:outline-none"
                    >
                        Print
                    </button>
                </li>
                <li>
                    <button 
                        onClick={handleAttendance}
                        className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-left focus:outline-none"
                    >
                        Attendance
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
