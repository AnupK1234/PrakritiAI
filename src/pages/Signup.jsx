import React, { useState } from 'react'
import {createUserWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase-config'
export default function Signup() {
  const[showPassword,setShowPassword]=useState(false)
  const[formValues,setFormValues]=useState({
    email:"",
    password:"",
  })

  const handleSigIn=async()=>{
    try{
const{email,password} = formValues;
await createUserWithEmailAndPassword(firebaseAuth,email,password)
    }
    catch(err){
      console.log(err)
    }
  }
  onAuthStateChanged(firebaseAuth,(currentUser)=>{
  if(currentUser) navigate('/')})
  return (
    <>
      <div>
        <div>
        <center>

          <h1> We're delighted to have you here! 🌟</h1>
            <h3> Get ready to embark on a personalized journey to discover your Ayurvedic Prakriti and enhance your well-being.</h3>
         
          <h6> Ready to begin your Ayurvedic journey? Click on 'login' if you already have account or else click on get started to created an account</h6>
          </center>

        </div>
        <div>
        <center>
      
          <input type='email' placeholder='Email Address' name='email' value={formValues.email} onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.value})}/>
          </center>
          <center>
{showPassword &&(
          <input type='password' placeholder='Password' name='password' value={formValues.password} onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.value})} />)
}
          </center>
          <center>


      {!showPassword &&(    <button onClick={()=> setShowPassword(true)}> Get Started</button>)}
          
          </center>


        </div>
        <center>

        <button onClick={handleSigIn}> Signup</button>
        </center>

      </div>
    </>
  )
}
