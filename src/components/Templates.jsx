import React from 'react'
import './Templates.css'
import Template1 from './Template1.png'
import Template2 from './Template2.png'
import Template3 from './Template3.png'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
export const Templates = () => {
    let {state}=useLocation();
    return (
        <div className='pics'>
            <div className='temps' >OUR TEMPLATES:</div>
            <div className='allpho'>
                <div ><Link to={'../homepage/Template1'} state={{state}}> <img className='pho' src={Template1} alt="Template1" /></Link></div>
                <div ><Link to={'../homepage/Template2'} state={{state}}> <img className='pho' src={Template2} alt="Template2" /></Link></div>
                <div > <Link to={'../homepage/Template3'} state={{state}}> <img className='pho' src={Template3} alt="Template3" /></Link></div>

            </div>
        </div>
    )
}
