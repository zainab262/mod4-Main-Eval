import React, { useState } from 'react'
import "../styles/login.css"
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import {app} from '../firebaseConfig'
import { useNavigate } from 'react-router-dom'
const auth=getAuth(app)


function Login() {
    let [email,setEmail]=useState()
    let [password,setPassword]=useState()
    let navigate=useNavigate()
    let handleLogin=()=>{
        signInWithEmailAndPassword(auth,email.password)
        alert("login Success")
        navigate("/home")

    }
  return (
    <div className='login-form'>
      <h2>Login Page</h2>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
