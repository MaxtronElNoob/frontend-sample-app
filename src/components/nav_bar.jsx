import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home } from '@mui/icons-material'
import { Typography } from '@mui/material';
import logo from '../assets/logo.png'

export const NavBar = () => {
  return (
      <nav className='nav-bar'>
        <NavLink className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to='/'><img src={logo} className='logo'/></NavLink>
        <NavLink className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to='/voluntario'>
          Voluntario
        </NavLink>
        <NavLink className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to='/solicitante'>
          Solicitante
        </NavLink>
      </nav>
  )
}

export default NavBar
