import { Link } from "react-router"

function RegisterPage() {
    return (
        <div>
           <div className="register-section">
             <h1>Create Your Account</h1>
                <p>Join TaskMate and start mastering your workflow today!</p>
             <form action="post">
                <span>Full Name</span>
                <br />
               <input type="text" placeholder=" Full Name" />
               <span>Email</span>
               <br />
               <input type="email" placeholder="Email" />
               <span>Password</span>
               <br />
               <input type="password" placeholder="Password" />
               <button type="submit">Register</button>
               <p>Already have an account?<Link to ="/login">Login</Link></p>
             </form>
           </div>
        </div>
    )
}

export default RegisterPage