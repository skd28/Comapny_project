import React from "react";
import"./register.css"
import { useState } from "react";
import axios from "axios"

const Register =()=>{

 const [user, setuser] = useState({
    name:"",
    email:"",
    password:"",
    reEnterPassword:"",
 })

const handleChange = e =>{
     const {name,value} =e.target
    //  console.log(name,value);
    setuser({
        ...user,
        [name]:value
    })
}


const register = () =>{
    const {name,email,password,reEnterPassword}=user
    if(name&&email&&password&&(password===reEnterPassword))
    {
        axios.post("http://localhost:9002/register",user)
        .then(res=>console.log(res))
    }
    else{
        alert("invalid input")
    }
    
}


    return (
        <div className="register">
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
            <input type="email" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
            <input type="Password"  name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
            <button type="button" className="btn btn-primary btn-lg" onClick={register}>Register</button>
            <div>or</div>
            <button type="button" className="btn btn-primary">Login</button>
        </div>
    )
}

export default Register