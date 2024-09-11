import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/hospital_ed.jpg';
import { authenticateUser } from '../auth/auth.js';  // Ensure this path is correct
import { UserContext } from '../userContext';  // Make sure this context is created

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);  // Using the UserContext

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = authenticateUser(username, password);  // Call the auth function directly
    if (user) {
      setUser(user);  // Save the user in context
      navigate('/');  // Redirect after login
    } else {
      setError('Invalid username or password');  // Display error message
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left section with background image */}
      <div
        className="w-3/4 flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center text-red-700">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-red-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-6">
              <label className="block text-red-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your password"
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Login
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-sm text-red-700">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 px-4 py-2 rounded"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
      {/* Right section with red background */}
      <div className="w-1/4 bg-red-700"></div>
    </div>
  );
};

export default Login;
