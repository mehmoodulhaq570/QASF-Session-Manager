import React, { useState } from 'react';

const AttEnrollmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailOrPhone: '',
    cnic: '',
    password: '',
  });

  const [passwordStrength, setPasswordStrength] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'password') {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password) => {
    if (password.length < 6) {
      setPasswordStrength('weak');
    } else if (password.length >= 6 && password.length <= 10) {
      setPasswordStrength('normal');
    } else if (password.length > 10) {
      setPasswordStrength('strong');
    }
  };

  const getBoxClass = (boxIndex) => {
    switch (passwordStrength) {
      case 'weak':
        return boxIndex === 0 ? 'bg-red-500' : 'bg-gray-300';
      case 'normal':
        return boxIndex <= 1 ? 'bg-yellow-500' : 'bg-gray-300';
      case 'strong':
        return 'bg-green-500';
      default:
        return 'bg-gray-300';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        {/* Title */}
        <h2 className="text-xl font-semibold text-center text-blue-600 mb-6">
          Enrollment for General Attendance
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="flex items-center border rounded-md p-2 bg-gray-100">
            <span className="text-gray-400 mr-2">👤</span>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full focus:outline-none bg-transparent text-gray-700"
              required
            />
          </div>

          {/* Email or Phone */}
          <div className="flex items-center border rounded-md p-2 bg-gray-100">
            <span className="text-gray-400 mr-2">📧</span>
            <input
              type="text"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              placeholder="Email Address or Phone Number"
              className="w-full focus:outline-none bg-transparent text-gray-700"
              required
            />
          </div>

          {/* CNIC */}
          <div className="flex items-center border rounded-md p-2 bg-gray-100">
            <span className="text-gray-400 mr-2">#️⃣</span>
            <input
              type="text"
              name="cnic"
              value={formData.cnic}
              onChange={handleChange}
              placeholder="CNIC"
              className="w-full focus:outline-none bg-transparent text-gray-700"
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center border rounded-md p-2 bg-gray-100">
            <span className="text-gray-400 mr-2">🔒</span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full focus:outline-none bg-transparent text-gray-700"
              required
            />
          </div>

          {/* Password Strength Indicator */}
          <div className="space-y-2">
            <div className="flex space-x-2">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`w-1/3 h-2 rounded-sm ${getBoxClass(index)}`}
                ></div>
              ))}
            </div>
            <p className="text-xs text-gray-500">
              {passwordStrength === 'weak'
                ? 'Weak'
                : passwordStrength === 'normal'
                ? 'Normal'
                : passwordStrength === 'strong'
                ? 'Strong'
                : ''}
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default AttEnrollmentForm;
