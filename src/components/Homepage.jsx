
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
     
      <div className='aboutus'>
        <div className='about'>
          <span style={{ fontSize: "30px", font: 'bald' }}>VC?</span>
          <span>
            A Curriculum Vitae (CV) is much more than a simple document
            listing your education and work experience.
            It is a powerful tool that opens doors to countless
            opportunities in your professional journey. Here's why
            having a strong and well-crafted CV is crucial:

            First Impressions Matter: Your CV serves as your
            introduction to potential employers or recruiters.
            It is often the first impression they have of you as a
            candidate. A well-designed and organized CV instantly captures
            attention and sets you apart from other applicants,
            increasing your chances of being shortlisted for interviews.

            Showcasing Your Skills and Experience: A CV allows you
            to showcase your skills, qualifications, and work experience
            in a concise and structured manner. It provides a comprehensive
            overview of your capabilities, achievements, and expertise, enabling
            employers to assess your suitability for a particular role or position.
          </span>
        </div>

        <img className='imgabout2' src="https://elitewritings.com/images/articles/34-I5opkGKtDU.jpg/800x600.jpg" alt="" />
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
        <button type="button" className="btn boton btn-dark"> templates</button>
      </div>
    </div>

  )
}
