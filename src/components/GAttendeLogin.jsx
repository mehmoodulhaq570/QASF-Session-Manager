import React, { useState } from 'react';

const GAttendeLogin = () => {
  const [selectedSession, setSelectedSession] = useState(null);

  // Sample sessions data
  const sessions = [
    {
      id: 1,
      title: 'Free Sessions',
      description:
        'Qasim Ali Shah conducts free motivational sessions focusing on personal growth, career guidance, and education.',
      enrolledCount: 5,
    },
  ];

  // Open popup
  const handleSessionClick = (session) => {
    setSelectedSession(session);
  };

  // Close popup
  const closePopup = () => {
    setSelectedSession(null);
  };

  return (
    <div className="min-h-screen bg-green-50 p-4">
      {/* Header */}
      <header className="bg-teal-600 text-white text-center py-4 rounded-md shadow-md">
        <h1 className="text-lg sm:text-xl font-semibold">My Sessions</h1>
      </header>

      {/* Sessions List */}
      <div className="mt-6 space-y-4 sm:space-y-6">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition duration-200 ease-in-out"
            onClick={() => handleSessionClick(session)}
          >
            <div className="w-full sm:w-auto">
              <h2 className="text-md sm:text-lg font-semibold">{session.title}</h2>
              <p className="text-sm sm:text-base text-gray-500 truncate">
                {session.description}
              </p>
            </div>
            <span className="text-gray-400 sm:text-lg">⋮</span>
          </div>
        ))}
      </div>

      {/* Popup */}
      {selectedSession && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 sm:w-96 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <h2 className="text-lg sm:text-xl font-bold mb-4">{selectedSession.title}</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              {selectedSession.description}
            </p>
            <p className="text-md sm:text-lg font-semibold text-teal-600 mb-4">
              Enrolled Sessions: {selectedSession.enrolledCount}
            </p>
            <button
              className="w-full py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GAttendeLogin;
