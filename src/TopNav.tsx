import { useState } from "react";
import { Link } from "react-router-dom";
import './TopNav.css'
function TopNav() {
    return(
        <div className="top-nav">
        <ul>
            <li><Link to ='/'>Taskmate</Link></li>
            <li><Link to='/features'>Features</Link></li>
            <li><Link to='/pricing'>Pricing</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/Register'><button>Register</button></Link></li>
        </ul>
       </div>
    )
}
export default TopNav