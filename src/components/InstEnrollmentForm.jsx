import React from 'react';

const EnrollmentForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="bg-white rounded-lg shadow-md p-6 w-80">
        <h2 className="text-xl font-semibold text-center text-blue-600 mb-6">Enrollment for Institutional</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="organization-name">
              What is your organization name?
            </label>
            <input
              type="text"
              id="organization-name"
              placeholder="Your answer"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="visit-persons">
              How many persons for visit?
            </label>
            <input
              type="text"
              id="visit-persons"
              placeholder="Your answer"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          >
            Submit Enrollment
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;
