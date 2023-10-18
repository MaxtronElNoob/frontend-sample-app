import * as React from 'react'; // Import useState from React
import {InputLabel,Button,MenuItem,FormControl,Select,Container,Accordion,Typography,AccordionSummary,AccordionDetails,Stack,Box,Divider,Card} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavBar from '../components/nav_bar';

export const Volunteer = () => {
  const [afectados, setAfectados] = React.useState('');  // Use useState to initialize state
  const [catastrofe, setCatastrofe] = React.useState('');  // Use useState to initialize state

  return (
    <div className='page'>
      <h1 className='page__title'>Chile Ayuda</h1>
      <NavBar />
      <h2>Solicitante</h2>
      <Container>
        <h3>Publicar busqueda de ayuda</h3>
        <FormControl fullWidth>
          <InputLabel id="afectados-label">Personas Afectadas</InputLabel>
          <Select labelId="afectados-label" id="afectados" value={afectados} onChange={(e) => setAfectados(e.target.value)} label="Personas Afectadas">
            <MenuItem value={'1-100'}>1-100</MenuItem>
            <MenuItem value={'100-1000'}>100-1000</MenuItem>
            <MenuItem value={'1000-10000'}>1000-10000</MenuItem>
            <MenuItem value={'10000-100000'}>10000-100000</MenuItem>
            <MenuItem value={'+100000'}>+100000</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
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
        <Button type="submit" variant="contained" color="primary">Publicar</Button>
      </Container>
      <Container>
        <h3>Ayudas activas</h3>
        <Container sx={'display:flex; justify-content: center '}>
          <Card sx={'justify-content: center;'}>
            <Stack direction="row" spacing={2} sx={'margin: 1em;'}>
              <Stack direction="column" spacing={2} >
                <Box component="span">Fecha</Box>
                <hr></hr>
                <Box component="span">Fecha_Sample</Box>
              </Stack>
              <hr></hr>
              <Stack direction="column" spacing={2} sx={'margin-left:4px'}>
                <Box component="span">Avance</Box>
                <hr></hr>
                <Box component="span">voluntarios inscritos / Voluntarios pedidos</Box>
              </Stack>
              <hr></hr>
              <Stack direction="column" spacing={2} sx={'margin-left:4px'}>
                <Box component="span">Tipo de Catastrofe</Box>
                <hr></hr>
                <Box component="span">Catastrofe_Sample</Box>
              </Stack>
            </Stack>
          </Card>
        </Container>
      </Container>
      <Container>
        <h3>Ayudas Pasadas</h3>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Fecha_Sample</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Container>
              <Stack direction="row" spacing={2} sx={'margin: 1em;'}>
                <Stack direction="column" spacing={2}>
                  <Box component="span">Resultado</Box>
                  <hr></hr>
                  <Box component="span">Resultado_Sample</Box>
                </Stack>
                <hr></hr>
                <Stack direction="column" spacing={2} sx={'margin-left:4px'}>
                  <Box component="span">Avance</Box>
                  <hr></hr>
                  <Box component="span">voluntarios inscritos / Voluntarios pedidos</Box>
                </Stack>
                <hr></hr>
                <Stack direction="column" spacing={2} sx={'margin-left:4px'}>
                  <Box component="span">Tipo de Catastrofe</Box>
                  <hr></hr>
                  <Box component="span">Catastrofe_Sample</Box>
                </Stack>
              </Stack>
            </Container>

            {/* <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography> */}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
            <Typography>Fecha_Sample</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Container>
              <Stack direction="row" spacing={2} sx={'margin: 1em;'}>
                  <Stack direction="column" spacing={2}>
                    <Box component="span">Resultado</Box>
                    <hr></hr>
                    <Box component="span">Resultado_Sample</Box>
                  </Stack>
                  <hr></hr>
                  <Stack direction="column" spacing={2} sx={'margin-left:4px'}>
                    <Box component="span">Avance</Box>
                    <hr></hr>
                    <Box component="span">voluntarios inscritos / Voluntarios pedidos</Box>
                  </Stack>
                  <hr></hr>
                  <Stack direction="column" spacing={2} sx={'margin-left:4px'}>
                    <Box component="span">Tipo de Catastrofe</Box>
                    <hr></hr>
                    <Box component="span">Catastrofe_Sample</Box>
                  </Stack>
                </Stack>
            </Container>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
}

export default Volunteer;
