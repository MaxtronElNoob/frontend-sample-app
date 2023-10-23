import * as React from 'react';
import { Typography, Button, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import NavBar from '../components/nav_bar';

export const Solicitante = () => {
  const [afectados, setAfectados] = React.useState('');
  const [catastrofe, setCatastrofe] = React.useState('');
  const [volMax, setVolMax] = React.useState(1); // Establece el valor inicial en 1

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Verifica que el número de voluntarios sea como mínimo 1
    if (volMax < 1) {
      alert('El número de voluntarios debe ser como mínimo 1.');
      return;
    }

    // Crear un objeto JSON con los datos del formulario
    const formData = {
      id: 3,
      urgencia: 'Urgencia',
      dia: '23/10/23',
      lugar: 'Quillancitos', // Asegúrate de que este campo sea dinámico si es necesario
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
    setVolMax(1); // Restablece el valor a 1
  };

  return (
    <div className='page'>
      <NavBar />
      <Typography variant='h2' justifyContent='center'>Reportar Catastrofe</Typography>
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
}

export default Solicitante;
