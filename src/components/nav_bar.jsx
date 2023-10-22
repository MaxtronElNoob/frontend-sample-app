import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home } from '@mui/icons-material'

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/'
      >
        <Home></Home>
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/voluntario'
      >
        Voluntario
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/solicitante'
      >
        Solicitante
      </NavLink>
    </nav>
  )
}

export default NavBar
