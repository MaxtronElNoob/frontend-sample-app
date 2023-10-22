import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home } from '@mui/icons-material'
import { Typography } from '@mui/material';

export const NavBar = () => {
  return (
    <div>
      <Typography variant='h1' className='page__title'>Chile Ayuda</Typography>
      <nav className='nav-bar'>
        <NavLink className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to='/'><Home/></NavLink>
        <NavLink className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to='/voluntario'>
          Voluntario
        </NavLink>
        <NavLink className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to='/solicitante'>
          Solicitante
        </NavLink>
      </nav>
    </div>

  )
}

export default NavBar
