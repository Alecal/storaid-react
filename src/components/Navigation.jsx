import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
        <nav className="navigation">
            <NavLink className={({ isActive }) => isActive ? "linkActive" : "link"} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "linkActive" : "link"} to="/about">About Us</NavLink>
            <NavLink className={({ isActive }) => isActive ? "linkActive" : "link"} to="/services">Services</NavLink>
            <NavLink className={({ isActive }) => isActive ? "linkActive" : "link"} to="/contact">Contact Us</NavLink>
         </nav>
  )
}

export default Navigation