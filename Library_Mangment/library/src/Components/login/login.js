import React from "react";
import"./login.css"
import { useState } from "react";

const Login =()=>{

        const [user, setuser] = useState({
           email:"",
           password:"",
        })
       
       const handleChange = e =>{
            const {name,value} =e.target
           //  console.log(name,value);
           setuser({
               ...user,
               [name]:value
           })
       }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="email" name="email" value={user.email} placeholder="Enter Your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange} ></input>
            <button type="button" class="btn btn-primary btn-lg">Login</button>
            <div>or</div>
            <button type="button" class="btn btn-primary">Register</button>
        </div>
    )
}

export default Login