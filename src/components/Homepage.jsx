
import React, { useEffect, useState } from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom'



export const Homepage = () => {

  return (
    <div className='homepage'>
      <div className='nomepage'>
        <img className='image' src="https://www.brightermonday.co.ke/discover/wp-content/uploads/2017/03/cv-writing.png" alt="" />
        <h1 className='text-overlay'> Expand Your Horizons: Build Skills with CV Master</h1>
      </div>

      <div className='ourgoals'>
        <span className='goal goal1'>

          <i className="fa fa-rocket" aria-hidden="true"></i>
          <span style={{ fontSize: "30px", font: 'bald' }}>  Unlock Your Potential:</span>
          <span>Unlock Your Potential: Create Your Professional CV with Ease.</span>
        </span>
        <span className='goal goal2'>
          <i className="fa fa-graduation-cap" aria-hidden="true"></i>
          <span style={{ fontSize: "30px", font: 'bald' }}> Stand Out from the Crowd:</span>
          <span>Stand Out from the Crowd: Craft a Unique and Impressive CV to Land Your Dream Job
          </span>
        </span>
      </div>
      <div className="card">
      </div>
      <div className='goto'>
        <span style={{ fontSize: "30px", font: 'bald' }}>A little bit about our projects:</span>
        <span>

          Our projects are innovative and impactful, designed to make a difference.
          We strive to create solutions that address real-world challenges, pushing
          the boundaries of what is possible. Through extensive research and collaboration,
          we develop projects that deliver meaningful results and contribute to positive change.
          With a focus on quality and excellence,
          our projects aim to inspire and leave a lasting impact on the communities we serve.
        </span>
      </div>
    </div>

  )
}
