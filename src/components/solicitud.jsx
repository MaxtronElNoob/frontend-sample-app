import React, { useState } from 'react';
import { InputLabel, Button, MenuItem, FormControl, Select, Typography, TextField } from '@mui/material';
import data from '../bd/data.json';

export const Solicitud = () => {
  const [afectados, setAfectados] = useState('');
  const [catastrofe, setCatastrofe] = useState('');
  const [volMax, setVolMax] = useState(0); // Agregar estado para el número de voluntarios

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (volMax < 1) {
      alert('El número de voluntarios debe ser como mínimo 1.');
      return;
    }
    // Crear un objeto JSON con los datos del formulario
    const formData = {
      id: 3,
      urgencia: 'Urgencia',
      dia: '23/10/23',
      lugar: 'Quillancitos',
      n_vol: 0,
      volMax: volMax,
      distance: 0,
      Status: 0,
      tipo: catastrofe,
    };
    
    // Guardar los datos en el almacenamiento local
    localStorage.setItem('formData', JSON.stringify(formData));

    alert('Se ha enviado su solicitud de ayuda.');

    // Restablecer el formulario si es necesario
    setAfectados('');
    setCatastrofe('');
    setVolMax(0);
  };

  return (
    <div className="solicitud-form">
      <Typography variant="h4">Publicar búsqueda de ayuda</Typography>
      <form onSubmit={handleFormSubmit}>
        <FormControl required sx={{ m: 1 }} fullWidth>
          <InputLabel id="afectados-label">Personas Afectadas</InputLabel>
          <Select
            labelId="afectados-label"
            id="afectados"
            value={afectados}
            onChange={(e) => setAfectados(e.target.value)}
            label="Personas Afectadas"
          >
            <MenuItem value="1-100">1-100</MenuItem>
            <MenuItem value="100-1000">100-1000</MenuItem>
            <MenuItem value="1000-10000">1000-10000</MenuItem>
            <MenuItem value="10000-100000">10000-100000</MenuItem>
            <MenuItem value="+100000">+100000</MenuItem>
          </Select>
        </FormControl>
        <FormControl required sx={{ m: 1 }} fullWidth>
          <InputLabel id="catastrofe-label">Catastrofe</InputLabel>
          <Select
            labelId="catastrofe-label"
            id="catastrofe"
            value={catastrofe}
            onChange={(e) => setCatastrofe(e.target.value)}
            label="Catastrofe"
          >
            <MenuItem value="Derrumbe">Derrumbe</MenuItem>
            <MenuItem value="Inundacion">Inundación</MenuItem>
            <MenuItem value="Incendio">Incendio</MenuItem>
            <MenuItem value="Sequia">Sequía</MenuItem>
            <MenuItem value="Quimico">Químico</MenuItem>
            <MenuItem value="Otro">Otro</MenuItem>
          </Select>
        </FormControl>
        <FormControl required sx={{ m: 1 }} fullWidth>
          <InputLabel id="volun-label">Numero de Voluntarios</InputLabel>
          <TextField
            labelId="volun-label"
            type="number"
            inputProps={{ inputProps: { min: 1 } }} // Establecer el mínimo en 1
            onChange={(e) => setVolMax(e.target.value)}
          />
        </FormControl>
        <Button type="submit" variant="contained" color="primary" sx={{ m: 1 }}>
          Publicar
        </Button>
      </form>
    </div>
  );
};

export default Solicitud;