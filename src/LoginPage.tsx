import React, { use, useState } from "react";
import TopNav from "./TopNav";
import { Link } from "react-router";


function LoginPage(){
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        console.log(email, password)
    }
    return(
        <>
        <TopNav/>
        <div className="login-section">
     <form onSubmit={handleSubmit}>
        <h1>Welcome back</h1>
          <h3>Login to your mastery dashboard</h3>
          <span>Email Address</span>
          <br></br>
          <input type="email" value= {email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />

          <span>Password</span>
          <br></br>
          <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
          <br></br>
          <button type="submit">
            Sign In
          </button>
          <br></br>
          <span>SECURE ACCESS</span>
         <p>Don't have an account? <Link to ="/Register">Register</Link></p>
      
     </form>
     </div>
        </>
    )

    
}
export default LoginPage