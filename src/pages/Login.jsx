import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../firebase-config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <div className="mb-8 text-3xl font-bold text-center text-black-600">Login</div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
          />
        </div>
        <div className="mb-6">
          <button
            onClick={handleLogin}
            className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-green-300"
          >
            Login to your account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
