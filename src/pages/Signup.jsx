// Import necessary React and Firebase modules
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  

  const handleSigIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };



  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up for an account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSigIn}>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formValues.email}
            onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-700 leading-5 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          <div className="mt-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formValues.password}
              onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-700 leading-5 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </div>
          <div className="mt-2 flex items-center">
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-sm text-green-500 hover:text-blue-700 focus:outline-none"
            >
              {showPassword ? "Hide" : "Show"} Password
            </button>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
