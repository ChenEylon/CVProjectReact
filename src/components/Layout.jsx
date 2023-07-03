import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './Layout.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



export const Layout = () => {
  const Navigate = useNavigate()
  const handleSubmit = () => {
    localStorage.removeItem("logged");
    Navigate("/")
  }
  return (
    <div>
      <div className='layout'>
        <Link to={'/homepage'}><button type="button" class="btn btn-secondary"> Homepage</button></Link>
        <Link to={'homepage/create'}><button type="button" class="btn btn-secondary">Create your CV</button></Link>
        <Link to={'homepage/CVS'}><button type="button" class="btn btn-secondary">Watch your CVs</button></Link>
        <button type="button" class="btn btn-secondary" onClick={handleSubmit}>Logout</button>

      </div>
      <Outlet />
    </div>
  )
}
