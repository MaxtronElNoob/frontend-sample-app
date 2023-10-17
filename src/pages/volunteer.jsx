import React from 'react'
import { Button} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import NavBar from '../components/nav_bar'
// import LogoUSM from '../assets/usm.png'

export const Volunteer = () => {
  const [afectados, setAfectados] = React.useState('');
  const [catastrofe, setCatastrofe] = React.useState('');

  return (
    <div className='page'>
      <h1 className='page__title'>Chile Ayuda</h1>
      <NavBar />
      <h2>Solicitante</h2>
      {/* <img src={LogoUSM} height={100} alt='logo usm' /><br /> */}
      {/* <Button variant='contained'>Material UI Button</Button> */}
      <FormControl fullWidth>
        <InputLabel id="afectados">Personas Afectadas</InputLabel>
          <Select labelId="afectados" id="afectados" value={afectados} label="Afectados" onChange={(e) => setAfectados(e.target.value)}>
            <MenuItem value={'1-100'}>1-100</MenuItem>
            <MenuItem value={'100-1000'}>100-1000</MenuItem>
            <MenuItem value={'1000-10000'}>1000-10000</MenuItem>
            <MenuItem value={'10000-100000'}>10000-100000</MenuItem>
            <MenuItem value={'+100000'}>+100000</MenuItem>
          </Select>
        <InputLabel id="tipo-catastrofe">Catastrofe</InputLabel>
          <Select labelId="tipo-catastrofe" id="tipo-catastrofe" value={catastrofe} label="catastrofe" onChange={(e) => setCatastrofe(e.target.value)}>
            <MenuItem value={'Derrumbe'}>Derrumbe</MenuItem>
            <MenuItem value={'Inundacion'}>Inundacíon</MenuItem>
            <MenuItem value={'Incendio'}>Incendio</MenuItem>
            <MenuItem value={'Sequia'}>Sequia</MenuItem>
            <MenuItem value={'Quimico'}>Quimico</MenuItem>
            <MenuItem value={'Otro'}>Otro</MenuItem>
          </Select>
      </FormControl>
    </div>
  )
}

export default Volunteer
