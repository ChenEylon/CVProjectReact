import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'




export const SignUp = () => {
  const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const navigate = useNavigate();

    const handleSubmit= async(e)=>{
        e.preventDefault();
        try {
            const databaser = await axios.post(
              "http://localhost:5000/users/create",
              {  name: name,
                 password: password  });
            console.log(databaser.data);
            localStorage.setItem("logged", databaser.data.token);
           navigate("/homepage")
          } catch (err) {
            alert("name or password invalid")
          }
      }

  return (
    <div className="gradient-form">
    <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
    <button onClick={handleSubmit}>Sign up</button>
        <Link to={"/"}>back to login</Link>
        
    </div>
  )
}