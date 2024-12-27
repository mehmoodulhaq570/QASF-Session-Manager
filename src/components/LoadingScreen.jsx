import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import qasflogo from '../assets/qasf-2.png';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1; // Increase progress by 1% each interval
        }
        clearInterval(interval); // Stop the interval when progress reaches 100%
        return prev;
      });
    }, 30); // Update progress every 30ms (adjust speed as needed)

    // Navigate to SessionsScreen when loading is complete
    if (progress === 100) {
      navigate('/'); // Redirect to SessionsScreen
    }

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [progress, navigate]); // Add progress and navigate to dependency array

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-300 via-blue-200 to-blue-400">
      <div className="flex flex-col items-center relative">
        {/* White Circle Background with Shadow */}
        <div
          className="bg-white rounded-full p-16 flex items-center justify-center absolute z-0"
          style={{
            top: '0%',
            boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.3)', // Added shadow here
          }}
        ></div>

        {/* Logo */}
        <img
          src={qasflogo} // Replace this path with the actual logo file path
          alt="Qasim Ali Shah Foundation"
          className="w-60 h-auto z-20 mt-6" // Image size maintained
        />

        {/* Progress Bar */}
        <div className="w-full h-2 bg-white/100 rounded-full mt-80 relative overflow-hidden">
          <div
            className="h-full bg-green-500 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loading Text */}
        <p className="mt-3 text-green-600 text-3/2xl font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
