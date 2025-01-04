import React, { useState } from "react";

const TrainerLogin = () => {
  const [showModal, setShowModal] = useState(false);
  const [sessionDetails, setSessionDetails] = useState({
    title: "Training Session",
    description: "Training About Health Maintenance",
    date: "2024-12-20",
    time: "12:30 AM",
    location: "Room 31, Floor 2nd, QASF Building, Lahore",
  });

  const [updatedDetails, setUpdatedDetails] = useState({ ...sessionDetails });

  // Handle Input Changes in Modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDetails({ ...updatedDetails, [name]: value });
  };

  // Save Updated Details
  const handleSave = () => {
    setSessionDetails(updatedDetails);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-lg">
        <div className="flex items-center space-x-2 mb-4">
          <button onClick={() => window.history.back()}>&larr;</button>
          <h1 className="text-xl font-bold text-teal-700">Free Sessions</h1>
        </div>
        <h2 className="text-gray-600 text-sm">Session Overview</h2>
      </div>

      {/* Session Card */}
      <div
        className="w-full max-w-lg bg-white rounded-lg shadow-md p-4 mt-4 hover:shadow-lg cursor-pointer transition"
        onClick={() => setShowModal(true)}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-800">
            {sessionDetails.title}
          </h3>
          <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">
            Upcoming
          </span>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          {sessionDetails.description}
        </p>
        <div className="flex items-center mt-3 space-x-4 text-gray-500 text-sm">
          <div className="flex items-center">
            <span className="mr-1">⏰</span> {sessionDetails.time}
          </div>
          <div className="flex items-center">
            <span className="mr-1">📅</span> {sessionDetails.date}
          </div>
        </div>
        <div className="flex items-center mt-3 text-gray-500 text-sm">
          <span className="mr-1">📍</span> {sessionDetails.location}
        </div>
      </div>

      {/* Floating Button */}
      <button
        className="fixed bottom-5 right-5 bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-teal-600"
        onClick={() => setShowModal(true)}
      >
        +
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h2 className="text-lg font-bold mb-4">Add New Session</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={updatedDetails.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Session Title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <input
                  type="text"
                  name="description"
                  value={updatedDetails.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Session Description"
                />
              </div>
              <div className="flex space-x-2">
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={updatedDetails.date}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={updatedDetails.time}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  name="location"
                  value={updatedDetails.location}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Session Location"
                />
              </div>
            </form>

            {/* Buttons */}
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="py-2 px-4 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="py-2 px-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainerLogin;