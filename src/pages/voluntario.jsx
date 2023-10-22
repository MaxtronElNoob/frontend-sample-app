import React from 'react'
import { Button } from '@mui/material'
import { Search } from '../components/busqueda'
import NavBar from '../components/nav_bar'

export const voluntario = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Chile Ayuda</h1>
      <NavBar />
      <h2>nombre_Voluntario</h2>
      <Button variant='contained'>Ayudar</Button>
      <Button variant='contained'>Lista de ayudas</Button>
      <Button variant='contained'>Perfil</Button>
      {/* <img src={LogoUSM} height={100} alt='logo usm' /><br />
      <Button variant='contained'>Material UI Button</Button> */}
      <Search></Search>
    </div>
  )
}

export default voluntario