import React, { useState } from 'react';
import qasflogo from '../assets/qasf-2.png';
import foundation from '../assets/foundation.jpg';
import freetraning from '../assets/free-traning.png';
import booklaunch from '../assets/book-launch.png';

const SessionsScreen = () => {
  const [popupContent, setPopupContent] = useState(null);

  const handleViewDetails = (title, description, image) => {
    setPopupContent({ title, description, image });
  };

  const handleClosePopup = () => {
    setPopupContent(null);
  };

  const buttonStyle = {
    borderRadius: '50px',
    padding: '10px 20px',
    color: 'black',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #A8E063, #56CCF2)',
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-center py-4">
        <img
          src={qasflogo}
          alt="Qasim Ali Shah Foundation Logo"
          className="w-60 h-auto z-20 mt-2"
        />
      </header>

      {/* Content */}
      <main className="px-4 py-4 space-y-4">
        {/* Free Sessions Card */}
        <div className="bg-gray-100 border border-gray-200 rounded-lg shadow-md">
          <div className="relative">
            <img
              src={freetraning}
              alt="Free Sessions"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">Free Sessions</h2>
            <p className="text-gray-600 text-sm">
              Qasim Ali Shah conducts free motivational sessions focusing on personal growth, career guidance, and education.
            </p>
            <div className="flex items-center justify-between mt-3">
              <p className="text-teal-600 font-semibold">$0.00</p>
              <button
                style={buttonStyle}
                onClick={() =>
                  handleViewDetails(
                    'Free Sessions',
                    'Qasim Ali Shah conducts free motivational sessions focusing on personal growth, career guidance, and education.',
                    freetraning
                  )
                }
              >
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Visit to Foundation Card */}
        <div className="bg-gray-100 border border-gray-200 rounded-lg shadow-md">
          <div className="relative">
            <img
              src={foundation}
              alt="Visit to Foundation"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">Visit to Foundation</h2>
            <p className="text-gray-600 text-sm">
              A visit to the Qasim Ali Shah Foundation offers a chance to explore initiatives focused on education, skill development, and empowerment.
            </p>
            <div className="flex items-center justify-between mt-3">
              <p className="text-teal-600 font-semibold">$0.00</p>
              <button
                style={buttonStyle}
                onClick={() =>
                  handleViewDetails(
                    'Visit to Foundation',
                    'A visit to the Qasim Ali Shah Foundation offers a chance to explore initiatives focused on education, skill development, and empowerment.',
                    foundation
                  )
                }
              >
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Book Launch Card */}
        <div className="bg-gray-100 border border-gray-200 rounded-lg shadow-md">
          <div className="relative">
            <img
              src={booklaunch}
              alt="Book Launch"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">Book Launch</h2>
            <p className="text-gray-600 text-sm">
              Discover insights from Qasim Ali Shah's latest book launch and engage with powerful ideas for personal and professional growth.
            </p>
            <div className="flex items-center justify-between mt-3">
              <p className="text-teal-600 font-semibold">$5.00</p>
              <button
                style={buttonStyle}
                onClick={() =>
                  handleViewDetails(
                    'Book Launch',
                    "Discover insights from Qasim Ali Shah's latest book launch and engage with powerful ideas for personal and professional growth.",
                    booklaunch
                  )
                }
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Popup */}
      {popupContent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <img
              src={popupContent.image}
              alt={popupContent.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold text-gray-800 mb-2">{popupContent.title}</h2>
            <p className="text-gray-600 text-sm mb-4">{popupContent.description}</p>
            <button style={buttonStyle} className="w-full">
              Enroll
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SessionsScreen;
