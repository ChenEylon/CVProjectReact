import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit';
import './login.css'

export const Login = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const Navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const databaser = await axios.post(
                "http://localhost:5000/users/login",
                {
                    name: name,
                    password: password
                });
            console.log(databaser.data);
            localStorage.setItem("logged", databaser.data);
            Navigate("/homepage")
        } catch (err) {
            console.log("not working");
        }
    }

    return (
        <div>
            <MDBContainer className="my-5 gradient-form">

                <MDBRow>

                    <MDBCol col='6' className="mb-5">
                        <div className="d-flex flex-column ms-5">

                            <div className="text-center">

                                <h4 className="mt-1 mb-5 pb-1">Welcome moT*******</h4>
                            </div>

                            <p>Please login to your account</p>


                            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} />
                            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />


                            <div className="text-center pt-1 mb-5 pb-1">
                                <button className="mb-4 w-100 gradient-custom-2" type="submit" onClick={handleSubmit} >Sign in</button>

                            </div>

                            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                                <p className="mb-0">Don't have an account?</p>
                                <button className="mb-4 w-100 gradient-custom-2" type="submit"> <Link to={"/signup"}>Signup</Link>
                                </button>
                            </div>

                        </div>

                    </MDBCol>

                    <MDBCol col='6' className="mb-5">
                        <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                <h4 className="mb-4">We are more than just a company</h4>
                                <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>

                        </div>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>

        </div>
    )
}
{/* <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
        <input type="submit" onClick={handleSubmit} />
        <Link to={"/signup"}>Signup</Link>*/}