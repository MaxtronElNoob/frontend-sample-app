import * as React from 'react'; // Import useState from React
import { Modal, Button, Box, Typography } from "@mui/material";
import NavBar from '../components/nav_bar';

export const HomePage = () => {
  return (
    <div className='page'>
      <NavBar />
      <h2>Página de Inicio</h2>
    </div>
  );
}

export default HomePage;