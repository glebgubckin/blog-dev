import React from 'react';
import { NavLink } from 'react-router-dom'
import '@/styles/admin/navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navbar-container">
        <NavLink
          to="/admin"
          className="navbar-link">
        📝Статьи
        </NavLink>
      </nav>
    </div>
  )
}

export default Navbar