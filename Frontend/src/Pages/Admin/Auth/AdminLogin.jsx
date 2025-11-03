import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token && role !== 'admin') {
      toast.error('You are logged in as a normal user. Please logout to access admin.');
      navigate('/');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await axios.post('http://localhost:3000/api/users/login', {
        email,
        password,
      });

      const user = res.data;
      if (user && user.token) {
        localStorage.setItem('token', user.token);
        localStorage.setItem('id', user._id);
        localStorage.setItem('email', user.email);
        localStorage.setItem('role', user.role);
        localStorage.setItem('fullname', user.fullname);

        toast.success('Admin login successful!');

        if (user.role === 'admin') {
          navigate('/admin');
        } else {
          toast.error('You are not authorized to access admin panel.');
        }
      } else {
        setError('Invalid login response');
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Login failed');
      toast.error(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    // This is the card that will be centered by the overlay in App.jsx
    <div className="relative flex w-96 flex-col space-y-5 rounded-lg border border-gray-200 bg-white px-5 py-10 shadow-xl">
      <button
        className="absolute right-3 top-3 text-gray-500 hover:text-gray-800 text-3xl font-extrabold focus:outline-none"
        onClick={() => navigate(-1)}
        disabled={loading}
      >
        &times;
      </button>

      <div className="mx-auto mb-2 space-y-3">
        <h1 className="text-center text-3xl font-bold text-gray-700">Admin Login</h1>
        <p className="text-gray-500 text-center">Login to access the Admin Dashboard</p>
      </div>

      {error && <div className="text-red-500 text-center">{error}</div>}

      <form className="space-y-5" onSubmit={handleLogin}>
        <div className="relative mt-2 w-full">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-cyan-500 focus:outline-none focus:ring-0"
            placeholder=" "
            required
            disabled={loading}
          />
          <label
            htmlFor="email"
            className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-cyan-500"
          >
            Enter Your Email
          </label>
        </div>

        <div className="relative mt-2 w-full">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-cyan-500 focus:outline-none focus:ring-0"
            placeholder=" "
            required
            minLength={6}
            disabled={loading}
          />
          <label
            htmlFor="password"
            className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-cyan-500"
          >
            Enter Your Password
          </label>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-block w-full rounded-lg bg-cyan-500 hover:bg-cyan-700 py-3 font-bold text-white"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;
