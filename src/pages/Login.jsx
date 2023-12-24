import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";

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
    
      <div className="content">
      
       
            <div className="title">
              <h3>Login</h3>
            </div>
          
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button onClick={handleLogin}>Login to your account</button>
            </div>
         
      
  
  );
}


export default Login;