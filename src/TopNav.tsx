import { useState } from "react";

function TopNav() {
    return(
        <div className="top-nav">
        <ul>
            <li><a href="#">TaskMate</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Login</a></li>
            <li><button>Register</button></li>
            
        </ul>
       </div>
    )
}
export default TopNav