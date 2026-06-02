import { useState } from "react";
import TopNav from "./TopNav";
import { Link } from "react-router";


function LoginPage(){
    return(
        <>
        <TopNav/>
        <div className="login-section">
     <form action="post">
        <h1>Welcome back</h1>
          <h3>Login to your mastery dashboard</h3>
          <span>Email Address</span>
          <br></br>
          <input type="email" placeholder="Email Address" />

          <span>Password</span>
          <br></br>
          <input type="password" placeholder="Password" />
          <br></br>
          <button type="submit">Sign In</button>
          <br></br>
          <span>SECURE ACCESS</span>
         <p>Don't have an account? <Link to ="/Register">Register</Link></p>
     </form>
     </div>
        </>
    )

    
}
export default LoginPage