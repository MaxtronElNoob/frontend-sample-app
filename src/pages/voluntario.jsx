import React from 'react'
import { Box, Button, Grid } from '@mui/material'
import { Search } from '../components/busqueda'
import NavBar from '../components/nav_bar'

export const voluntario = () => {
  const props = {'tipo':'Urgente','dia':'hoy','lugar':'Machupichu','n_vol':4,'distance':1000}
  return (
    <div className='page'>
      <h1 className='page__title'>Chile Ayuda</h1>
      <NavBar />
      <h2>nombre_Voluntario</h2>
      <Box sx={{display:'grid'}}>
        <Button variant='contained'>Ayudar</Button>
        <Button variant='contained'>Lista de ayudas</Button>
      </Box>

      
      {/* <img src={LogoUSM} height={100} alt='logo usm' /><br />
      <Button variant='contained'>Material UI Button</Button> */}
      <Search {...props}/>
      <Button variant='contained'>Perfil</Button>
    </div>
  )
}

export default voluntario