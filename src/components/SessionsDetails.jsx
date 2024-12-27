// import React, { useState } from "react";
// import qasflogo from "../assets/qasf-2.png";
// import foundation from "../assets/foundation.jpg";
// import freetraning from "../assets/free-traning.png";
// import booklaunch from "../assets/book-launch.png";

// const SessionsScreen = () => {
//   const [popupContent, setPopupContent] = useState(null);
//   const [roleModal, setRoleModal] = useState(false); // Role modal state
//   const [nestedModal, setNestedModal] = useState(false); // Nested modal state
//   const [roleOptions, setRoleOptions] = useState([]); // To hold role options based on session type

//   const handleViewDetails = (title, description, image, sessionType) => {
//     setPopupContent({ title, description, image });
//     // Set role options based on session type
//     if (sessionType === "foundation") {
//       setRoleOptions(["Institution"]);
//     } else if (sessionType === "booklaunch") {
//       setRoleOptions(["General Attendee", "Author"]);
//     } else if (sessionType === "free") {
//       setRoleOptions(["General Attendee", "Trainer"]);
//     }
//   };

//   const handleClosePopup = () => {
//     setPopupContent(null);
//   };

//   const handleEnroll = () => {
//     setPopupContent(null); // Close any open popups before opening the role modal
//     setRoleModal(true);
//   };

//   const handleCloseRoleModal = () => {
//     setRoleModal(false);
//     setNestedModal(false); // Close any nested modals as well
//   };

//   const handleOpenNestedModal = () => {
//     setRoleModal(false); // Close the role modal before opening the next one
//     setNestedModal(true); // Open the nested modal
//   };

//   const handleCloseNestedModal = () => {
//     setNestedModal(false); // Close only the nested modal
//   };

//   // Updated buttonStyle for blue color
//   const buttonStyle = {
//     borderRadius: "50px",
//     padding: "10px 20px",
//     color: "black",
//     fontWeight: "bold",
//     background: "linear-gradient(to right, #A8E063, #56CCF2)",
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header Section */}
//       <header className="flex justify-center py-4">
//         <img
//           src={qasflogo}
//           alt="Qasim Ali Shah Foundation Logo"
//           className="w-60 h-auto z-20 mt-2"
//         />
//       </header>

//       {/* Main Content */}
//       <main className="px-4 py-4 space-y-4">
//         {/* Free Sessions Card */}
//         <div className="bg-gray-100 border border-gray-200 rounded-lg shadow-md">
//           <div className="relative">
//             <img
//               src={freetraning}
//               alt="Free Sessions"
//               className="w-full h-48 object-cover rounded-t-lg"
//             />
//           </div>
//           <div className="p-4">
//             <h2 className="text-lg font-bold text-gray-800">Free Sessions</h2>
//             <p className="text-gray-600 text-sm">
//               Qasim Ali Shah conducts free motivational sessions focusing on personal growth, career guidance, and education.
//             </p>
//             <div className="flex items-center justify-between mt-3">
//               <p className="text-teal-600 font-semibold">$0.00</p>
//               <button
//                 style={buttonStyle}
//                 onClick={() =>
//                   handleViewDetails(
//                     "Free Sessions",
//                     "Qasim Ali Shah conducts free motivational sessions focusing on personal growth, career guidance, and education.",
//                     freetraning,
//                     "free"
//                   )
//                 }
//               >
//                 View Details
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Visit to Foundation Card */}
//         <div className="bg-gray-100 border border-gray-200 rounded-lg shadow-md">
//           <div className="relative">
//             <img
//               src={foundation}
//               alt="Visit to Foundation"
//               className="w-full h-48 object-cover rounded-t-lg"
//             />
//           </div>
//           <div className="p-4">
//             <h2 className="text-lg font-bold text-gray-800">Visit to Foundation</h2>
//             <p className="text-gray-600 text-sm">
//               A visit to the Qasim Ali Shah Foundation offers a chance to explore initiatives focused on education, skill development, and empowerment.
//             </p>
//             <div className="flex items-center justify-between mt-3">
//               <p className="text-teal-600 font-semibold">$0.00</p>
//               <button
//                 style={buttonStyle}
//                 onClick={() =>
//                   handleViewDetails(
//                     "Visit to Foundation",
//                     "A visit to the Qasim Ali Shah Foundation offers a chance to explore initiatives focused on education, skill development, and empowerment.",
//                     foundation,
//                     "foundation"
//                   )
//                 }
//               >
//                 View Details
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Book Launch Card */}
//         <div className="bg-gray-100 border border-gray-200 rounded-lg shadow-md">
//           <div className="relative">
//             <img
//               src={booklaunch}
//               alt="Book Launch"
//               className="w-full h-48 object-cover rounded-t-lg"
//             />
//           </div>
//           <div className="p-4">
//             <h2 className="text-lg font-bold text-gray-800">Book Launch</h2>
//             <p className="text-gray-600 text-sm">
//               Discover insights from Qasim Ali Shah's latest book launch and engage with powerful ideas for personal and professional growth.
//             </p>
//             <div className="flex items-center justify-between mt-3">
//               <p className="text-teal-600 font-semibold">$5.00</p>
//               <button
//                 style={buttonStyle}
//                 onClick={() =>
//                   handleViewDetails(
//                     "Book Launch",
//                     "Discover insights from Qasim Ali Shah's latest book launch and engage with powerful ideas for personal and professional growth.",
//                     booklaunch,
//                     "booklaunch"
//                   )
//                 }
//               >
//                 View Details
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Popup */}
//       {popupContent && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white rounded-lg p-6 w-80 shadow-lg relative">
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200"
//               onClick={handleClosePopup}
//             >
//               &times;
//             </button>
//             <img
//               src={popupContent.image}
//               alt={popupContent.title}
//               className="w-full h-40 object-cover rounded-md mb-4"
//             />
//             <h2 className="text-lg font-bold text-gray-800 mb-2">{popupContent.title}</h2>
//             <p className="text-gray-600 text-sm mb-4">{popupContent.description}</p>
//             <button style={buttonStyle} className="w-full" onClick={handleEnroll}>
//               Enroll
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Role Selection Modal */}
//       {roleModal && (
//         <div className="fixed inset-0 flex items-end justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white rounded-t-2xl p-6 w-full max-w-lg shadow-lg animate-slide-up">
//             <button
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200"
//               onClick={handleCloseRoleModal}
//             >
//               &times;
//             </button>
//             <div className="text-center">
//               <h2 className="text-2xl font-bold text-gray-800 mb-4">Select Your Role</h2>
//               <p className="text-gray-600">Choose the appropriate role for enrollment.</p>
//             </div>
//             <div className="flex flex-col space-y-4 mt-6">
//               {roleOptions.map((role, index) => (
//                 <button
//                   key={index}
//                   onClick={handleOpenNestedModal}
//                   className={`flex items-center justify-center py-3 px-6 rounded-lg ${
//                     role === "General Attendee" || role === "Institution"
//                       ? "bg-green-500 hover:bg-green-600"
//                       : "bg-blue-500 hover:bg-blue-600"
//                   } text-white font-semibold shadow-md transition duration-300`}
//                 >
//                   {role}
//                 </button>
//               ))}
//             </div>
//             <div className="mt-6 text-center">
//               <button
//                 className="py-2 px-4 rounded-lg bg-red-500 text-white font-semibold shadow-md hover:bg-red-600 transition duration-300"
//                 onClick={handleCloseRoleModal}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Nested Bottom Sheet Modal */}
//       {nestedModal && (
//         <div className="fixed inset-0 flex items-end justify-center bg-black bg-opacity-50 z-60">
//           <div className="bg-white rounded-t-2xl p-6 w-full max-w-lg shadow-lg animate-slide-up">
//             <button
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200"
//               onClick={handleCloseNestedModal}
//             >
//               &times;
//             </button>
//             <div className="text-center">
//               <h2 className="text-xl font-bold text-gray-800 mb-2">Confirm Enrollment</h2>
//               <p className="text-gray-600 mb-4">Are you sure you want to enroll?</p>
//             </div>
//             <div className="flex flex-col space-y-4">
//               <button
//                 className="w-full py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
//                 onClick={handleCloseNestedModal}
//               >
//                 Confirm
//               </button>
//               <button
//                 className="w-full py-2 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300"
//                 onClick={handleCloseNestedModal}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionsScreen;



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

  const navigate = useNavigate(); // Use navigate for routing

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

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="flex justify-center py-4">
        <img
          src={qasflogo}
          alt="Qasim Ali Shah Foundation Logo"
          className="w-60 h-auto z-20 mt-2"
        />
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
    </div>
  );
};

export default SessionsScreen;