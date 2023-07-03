import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Layout.css'
import { Link } from 'react-router-dom'


export const CVS = () => {
    const [info, setInfo] = useState([])
    useEffect(() => {
        axios
            .post("http://localhost:5000/users/translateToken",
                {
                    token: localStorage.getItem("logged")
                })
            .then(({ data }) => {
                console.log(data.cvInfo)
                setInfo(data.cvInfo)
            }
            )
            .catch((err) => console.log(err.message));
    }, [])
    return (
        <div className='bod'>
            {info && info.map((info, index) => {
                return (
                    <div key={index}>
                        <Link to='../homepage/Templates/' state={{ index: index }} >
                            <div className='boy'>
                                {info.address}{index}
                            </div>
                        </Link>
                    </div>)
            })}
        </div>
    )
}
