import * as React from 'react'; // Import useState from React
import {Container,Accordion,Typography,AccordionSummary,AccordionDetails,Stack,Card, Divider, Button} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavBar from '../components/nav_bar';
import Solicitud from '../components/solicitud';

export const Solicitante = () => {

  return (
    <div className='page'>
      <h1 className='page__title'>Chile Ayuda</h1>
      <NavBar/>
      <h2>Solicitante</h2>
      <Container>
        <Solicitud></Solicitud>
        <h3>Ayudas activas</h3>
        <Card sx={'display:flex; justify-content:center'}>
          <Stack direction="row" spacing={2} sx={{m: 1}}>
            <Stack direction="column" spacing={2} >
              <Typography variant="body1" align='center'>Fecha</Typography>
              <Divider></Divider>
              <Typography variant="body1" align='center'>Fecha_Sample</Typography>
            </Stack>
            <Divider orientation='vertical'></Divider>
            <Stack direction="column" spacing={2}>
              <Typography variant="body1" align='center'>Avance</Typography>
              <Divider></Divider>
              <Typography variant="body1" align='center'>voluntarios inscritos / Voluntarios pedidos</Typography>
            </Stack>
            <Divider orientation='vertical'></Divider>
            <Stack direction="column" spacing={2}>
              <Typography variant="body1" align='center'>Tipo de Catastrofe</Typography>
              <Divider></Divider>
              <Typography variant="body1" align='center'>Catastrofe_Sample</Typography>
            </Stack>
          </Stack>
          <div><Button variant='contained'>Edit</Button></div>
        </Card>
        <h3>Ayudas Pasadas</h3>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Fecha_Sample</Typography>
          </AccordionSummary>
          <AccordionDetails sx={'display:flex; justify-content: center '}>
              <Stack direction="row" spacing={2}>
                <Stack direction="column" spacing={2}>
                  <Typography variant="body1" align='center'>Resultado</Typography>
                  <Divider></Divider>
                  <Typography variant="body1" align='center'>Resultado_Sample</Typography>
                </Stack>
                <Divider orientation='vertical'></Divider>
                <Stack direction="column" spacing={2}>
                  <Typography variant="body1" align='center'>Avance</Typography>
                  <Divider></Divider>
                  <Typography variant="body1" align='center'>voluntarios inscritos / Voluntarios pedidos</Typography>
                </Stack>
                <Divider orientation='vertical'></Divider>
                <Stack direction="column" spacing={2}>
                  <Typography variant="body1" align='center'>Tipo de Catastrofe</Typography>
                  <Divider></Divider>
                  <Typography variant="body1" align='center'>Catastrofe_Sample</Typography>
                </Stack>
              </Stack>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Fecha_Sample</Typography>
          </AccordionSummary>
          <AccordionDetails sx={'display:flex; justify-content:center'}>
              <Stack direction="row" spacing={2}>
                <Stack direction="column" spacing={2}>
                  <Typography variant="body1" align='center'>Resultado</Typography>
                  <Divider></Divider>
                  <Typography variant="body1" align='center'>Resultado_Sample</Typography>
                </Stack>
                <Divider orientation='vertical'></Divider>
                <Stack direction="column" spacing={2}>
                  <Typography variant="body1" align='center'>Avance</Typography>
                  <Divider></Divider>
                  <Typography variant="body1" align='center'>voluntarios inscritos / Voluntarios pedidos</Typography>
                </Stack>
                <Divider orientation='vertical'></Divider>
                <Stack direction="column" spacing={2}>
                  <Typography variant="body1" align='center'>Tipo de Catastrofe</Typography>
                  <Divider></Divider>
                  <Typography variant="body1" align='center'>Catastrofe_Sample</Typography>
                </Stack>
              </Stack>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
}

export default Solicitante;
