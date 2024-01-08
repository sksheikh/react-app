import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <NavLink className="nav-link" to={'/'}>Home</NavLink>
      <NavLink className="nav-link" to={'/blog'}>Blog</NavLink>
      <NavLink className="nav-link" to={'/contact'}>Contact</NavLink>
    </nav>
  )
}

