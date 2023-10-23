import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import HistoryIcon from '@mui/icons-material/History';
import SosIcon from '@mui/icons-material/Sos';
import logo from '../assets/logo.png';

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavLink className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to="/">
        <img src={logo} className="logo" alt="Logo" />
      </NavLink>
      <NavLink className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to="/voluntario">
        <AccountCircleSharpIcon fontSize='large'/>
      </NavLink>
      <NavLink className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to="/solicitante">
        <SosIcon fontSize='large'/>
      </NavLink>
      <NavLink className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to="/historial">
        <HistoryIcon fontSize='large'/>
      </NavLink>
    </nav>
  );
};

export default NavBar;
