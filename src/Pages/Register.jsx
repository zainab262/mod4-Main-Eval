import { useState } from "react"
import React from 'react'
import "../styles/login.css"
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import {app} from '../firebaseConfig'
const auth=getAuth(app)
function Register() {
    let [email,setEmail]=useState()
    let [password,setPassword]=useState()
    let handleRegister=()=>{
        createUserWithEmailAndPassword(auth,email,password)
        

    }
  return (
    <div>
      <div className='login-form'>
      <h2>Register</h2>
      <input type='text' 
      placeholder='Enter Email'
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      ></input>
       <input type='password' 
      placeholder='Enter Password'
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      ></input>
      <button onClick={handleRegister}>Signup</button>
    </div>
    </div>
  )
}

export default Register
