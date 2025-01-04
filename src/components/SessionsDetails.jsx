import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate
import qasflogo from "../assets/qasf-2.png";
import foundation from "../assets/foundation.jpg";
import freetraning from "../assets/free-traning.png";
import booklaunch from "../assets/book-launch.png";

const SessionsScreen = () => {
  const [popupContent, setPopupContent] = useState(null);
  const [roleModal, setRoleModal] = useState(false); // Role modal state
  const [nestedModal, setNestedModal] = useState(false); // Nested modal state
  const [roleOptions, setRoleOptions] = useState([]); // To hold role options based on session type
  const [confirmed, setConfirmed] = useState(false); // To track confirmation state
  const [loginModal, setLoginModal] = useState(false);
  const [notificationSidebar, setNotificationSidebar] = useState(false);

  const navigate = useNavigate(); // Use navigate for routing

  const handleLogin = () => {
    setLoginModal(true);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Toggle visibility

  const handleViewDetails = (title, description, image, sessionType) => {
    setPopupContent({ title, description, image });
    // Set role options based on session type
    if (sessionType === "foundation") {
      setRoleOptions(["Institution"]);
    } else if (sessionType === "booklaunch") {
      setRoleOptions(["General Attendee", "Author"]);
    } else if (sessionType === "free") {
      setRoleOptions(["General Attendee", "Trainer"]);
    }
  };

  const handleClosePopup = () => {
    setPopupContent(null);
  };

  const handleEnroll = () => {
    setPopupContent(null); // Close any open popups before opening the role modal
    setRoleModal(true);
  };

  const handleCloseRoleModal = () => {
    setRoleModal(false);
    setNestedModal(false); // Close any nested modals as well
  };

  const handleOpenNestedModal = (role) => {
    setRoleModal(false); // Close the role modal before opening the next one
    setNestedModal(true); // Open the nested modal

    // Store the selected role for confirmation
    setRoleOptions(role);
  };

  const handleConfirmEnrollment = () => {
    setConfirmed(true); // Set confirmation state to true

    // Proceed with navigation after confirmation
    if (roleOptions === "General Attendee") {
      navigate("/attendee");
    } else if (roleOptions === "Author") {
      navigate("/author");
    } else if (roleOptions === "Trainer") {
      navigate("/trainer");
    } else if (roleOptions === "Institution") {
      navigate("/institution");
    }
  };

  const handleCancelEnrollment = () => {
    setNestedModal(false); // Close the modal without any action
  };

  // Updated buttonStyle for blue color
  const buttonStyle = {
    borderRadius: "50px",
    padding: "10px 20px",
    color: "black",
    fontWeight: "bold",
    background: "linear-gradient(to right, #A8E063, #56CCF2)",
  };

  const notifications = [
    "Welcome to the platform!",
    "New session available: AI Fundamentals",
    "Update: Schedule changes for next week",
    "Don't forget to complete your profile",
    "Your course 'React Basics' has been updated",
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      {/* Navbar */}
      <header className="flex justify-between items-center py-4 px-6 bg-white shadow-md sticky top-0 z-10">
        {/* Logo */}
        <img
          src={qasflogo}
          alt="Qasim Ali Shah Foundation Logo"
          className="w-60 h-auto z-20 mt-2"
        />
        <div className="flex items-center space-x-6">
          {/* Person Icon */}
          <button
            onClick={() => setLoginModal(true)}
            className="text-gray-600 hover:text-blue-500 text-2xl"
          >
            <i className="fa-solid fa-user"></i> {/* FontAwesome User Icon */}
          </button>
          {/* Notification Icon */}
          <button
            onClick={() => setNotificationSidebar(true)}
            className="text-gray-600 hover:text-blue-500 text-2xl"
          >
            <i className="fa-solid fa-bell"></i> {/* FontAwesome Bell Icon */}
          </button>
        </div>
      </header>

      {/* Main Content */}
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
                    "Free Sessions",
                    "Qasim Ali Shah conducts free motivational sessions focusing on personal growth, career guidance, and education.",
                    freetraning,
                    "free"
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
                    "Visit to Foundation",
                    "A visit to the Qasim Ali Shah Foundation offers a chance to explore initiatives focused on education, skill development, and empowerment.",
                    foundation,
                    "foundation"
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
                    "Book Launch",
                    "Discover insights from Qasim Ali Shah's latest book launch and engage with powerful ideas for personal and professional growth.",
                    booklaunch,
                    "booklaunch"
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
            <button style={buttonStyle} className="w-full" onClick={handleEnroll}>
              Enroll
            </button>
          </div>
        </div>
      )}

      {/* Role Selection Modal */}
      {roleModal && (
        <div className="fixed inset-0 flex items-end justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-t-2xl p-6 w-full max-w-lg shadow-lg animate-slide-up">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200"
              onClick={handleCloseRoleModal}
            >
              &times;
            </button>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Select Your Role</h2>
              <p className="text-gray-600">Choose the appropriate role for enrollment.</p>
            </div>
            <div className="flex flex-col space-y-4 mt-6">
              {roleOptions.map((role, index) => (
                <button
                  key={index}
                  onClick={() => handleOpenNestedModal(role)} // Pass the selected role to the function
                  className={`flex items-center justify-center py-3 px-6 rounded-lg ${
                    role === "General Attendee" || role === "Institution"
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-blue-500 hover:bg-blue-600"
                  } text-white font-semibold shadow-md transition duration-300`}
                >
                  {role}
                </button>
              ))}
            </div>
            <div className="mt-6 text-center">
              <button
                className="py-2 px-4 rounded-lg bg-red-500 text-white font-semibold shadow-md hover:bg-red-600 transition duration-300"
                onClick={handleCloseRoleModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Nested Confirmation Modal */}
      {nestedModal && (
        <div className="fixed inset-0 flex items-end justify-center bg-black bg-opacity-50 z-60">
          <div className="bg-white rounded-t-2xl p-6 w-full max-w-lg shadow-lg animate-slide-up">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200"
              onClick={handleCloseRoleModal}
            >
              &times;
            </button>
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Confirm Enrollment</h2>
              <p className="text-gray-600 mb-4">Are you sure you want to enroll as a {roleOptions}?</p>
            </div>
            <div className="flex flex-col space-y-4">
              <button
                className="w-full py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                onClick={handleConfirmEnrollment} // Confirm button calls the confirmation handler
              >
                Confirm
              </button>
              <button
                className="w-full py-2 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300"
                onClick={handleCancelEnrollment} // Cancel button closes the modal
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {loginModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg relative">
            {/* Close Button */}
            <button
              aria-label="Close Modal"
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200"
              onClick={() => setLoginModal(false)}
            >
              &times;
            </button>

            {/* Modal Title */}
            <h2
              id="modal-title"
              className="text-xl font-bold text-gray-800 mb-4"
            >
              Login
            </h2>

            {/* Login Form */}
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username or Email
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your username or email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <div className="flex justify-between space-x-2">
                <button
                  type="button"
                  onClick={() => setLoginModal(false)}
                  className="w-1/2 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Login
                </button>
              </div>
            </form>

            {/* Role Selection Buttons */}
            <div className="flex flex-col space-y-2 mt-4">
              <button
                type="button"
                onClick={() => navigate("/g-attende")}
                className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Continue as Attendee
              </button>
              <button
                type="button"
                onClick={() => navigate("/g-trainer")}
                className="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
              >
                Continue as Trainer
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Notification Sidebar */}
      {notificationSidebar && (
        <div className="fixed inset-y-0 right-0 w-80 bg-white shadow-lg z-50">
          <div className="flex justify-between items-center p-4 bg-gray-100 border-b">
            <h3 className="text-lg font-bold text-gray-800">Notifications</h3>
            <button
              onClick={() => setNotificationSidebar(false)}
              className="text-gray-600 hover:text-gray-800 text-xl"
            >
              &times;
            </button>
          </div>
          <ul className="p-4 space-y-3">
            {notifications.map((notification, index) => (
              <li
                key={index}
                className="p-3 bg-blue-100 rounded-lg text-gray-800 shadow-sm"
              >
                {notification}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SessionsScreen;

