import React, { useState } from 'react';  // Import useState from React
import {InputLabel,Button,MenuItem,FormControl,Select, Container} from '@mui/material';
import NavBar from '../components/nav_bar';

export const Volunteer = () => {
  const [afectados, setAfectados] = useState('');  // Use useState to initialize state
  const [catastrofe, setCatastrofe] = useState('');  // Use useState to initialize state

  return (
    <div className='page'>
      <h1 className='page__title'>Chile Ayuda</h1>
      <NavBar />
      <h2>Solicitante</h2>
      <h3>Publicar busqueda de ayuda</h3>
      <Container>
        <FormControl fullWidth>
          <InputLabel id="afectados-label">Personas Afectadas</InputLabel>
          <Select
            labelId="afectados-label"
            id="afectados"
            value={afectados}
            onChange={(e) => setAfectados(e.target.value)}
            label="Personas Afectadas"
          >
            <MenuItem value={'1-100'}>1-100</MenuItem>
            <MenuItem value={'100-1000'}>100-1000</MenuItem>
            <MenuItem value={'1000-10000'}>1000-10000</MenuItem>
            <MenuItem value={'10000-100000'}>10000-100000</MenuItem>
            <MenuItem value={'+100000'}>+100000</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="catastrofe-label">Catastrofe</InputLabel>
          <Select
            labelId="catastrofe-label"
            id="catastrofe"
            value={catastrofe}
            onChange={(e) => setCatastrofe(e.target.value)}
            label="Catastrofe"
          >
            <MenuItem value={'Derrumbe'}>Derrumbe</MenuItem>
            <MenuItem value={'Inundacion'}>Inundación</MenuItem>
            <MenuItem value={'Incendio'}>Incendio</MenuItem>
            <MenuItem value={'Sequia'}>Sequía</MenuItem>
            <MenuItem value={'Quimico'}>Químico</MenuItem>
            <MenuItem value={'Otro'}>Otro</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </Container>


    </div>
  );
}

export default Volunteer;
