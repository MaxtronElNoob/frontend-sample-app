import * as React from 'react'; // Import useState from React
import {InputLabel,Button,MenuItem,FormControl,Select,Typography} from '@mui/material';

export const Solicitud = () => {
  const [afectados, setAfectados] = React.useState('');  // Use useState to initialize state
  const [catastrofe, setCatastrofe] = React.useState('');  // Use useState to initialize state

  return (
    <div className='solicitud-form'>
        <Typography variant='h4'>Publicar busqueda de ayuda</Typography>
        <form>
            <FormControl sx={{ m: 1}} fullWidth>
                <InputLabel id="afectados-label">Personas Afectadas</InputLabel>
                <Select labelId="afectados-label" id="afectados" value={afectados} onChange={(e) => setAfectados(e.target.value)} label="Personas Afectadas">
                  <MenuItem value={'1-100'}>1-100</MenuItem>
                  <MenuItem value={'100-1000'}>100-1000</MenuItem>
                  <MenuItem value={'1000-10000'}>1000-10000</MenuItem>
                  <MenuItem value={'10000-100000'}>10000-100000</MenuItem>
                  <MenuItem value={'+100000'}>+100000</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1}} fullWidth>
                <InputLabel id="catastrofe-label">Catastrofe</InputLabel>
                <Select labelId="catastrofe-label" id="catastrofe" value={catastrofe} onChange={(e) => setCatastrofe(e.target.value)} label="Catastrofe">
                  <MenuItem value={'Derrumbe'}>Derrumbe</MenuItem>
                  <MenuItem value={'Inundacion'}>Inundación</MenuItem>
                  <MenuItem value={'Incendio'}>Incendio</MenuItem>
                  <MenuItem value={'Sequia'}>Sequía</MenuItem>
                  <MenuItem value={'Quimico'}>Químico</MenuItem>
                  <MenuItem value={'Otro'}>Otro</MenuItem>
                </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary" sx={{ m: 1}}>Publicar</Button>
        </form>
    </div>

  );
}

export default Solicitud;