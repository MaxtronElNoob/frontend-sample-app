import React from 'react'
import { Button } from '@mui/material'

import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/usm.png'

export const voluntario = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Chile Ayuda</h1>
      <NavBar />
      <h2>Ayudado</h2>
      <img src={LogoUSM} height={100} alt='logo usm' /><br />
      <Button variant='contained'>Material UI Button</Button>
    </div>
  )
}

export default voluntario