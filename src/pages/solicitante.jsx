import * as React from 'react'; // Import useState from React
import {Container,Accordion,Typography,AccordionSummary,AccordionDetails,Stack,Card, Divider, Button} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavBar from '../components/nav_bar';
import Solicitud from '../components/solicitud';
import data from '../bd/data.json';

export const Solicitante = () => {

  return (
    <div className='page'>
      <NavBar/>
      <Typography variant='h2'>Solicitante</Typography>
      <Container>
        <Solicitud/>
        <Typography variant='h4'>Ayudas activas</Typography>
        <Card sx={'display:flex; justify-content:center'}>
          <Stack direction="row" spacing={2} sx={{m: 1}}>
            <Stack direction="column" spacing={2} >
              <Typography variant="body1" align='center'>Fecha</Typography>
              <Divider/>
              <Typography variant="body1" align='center'>Fecha_Sample</Typography>
            </Stack>
            <Divider orientation='vertical'/>
            <Stack direction="column" spacing={2}>
              <Typography variant="body1" align='center'>Avance</Typography>
              <Divider/>
              <Typography variant="body1" align='center'>voluntarios inscritos / Voluntarios pedidos</Typography>
            </Stack>
            <Divider orientation='vertical'/>
            <Stack direction="column" spacing={2}>
              <Typography variant="body1" align='center'>Tipo de Catastrofe</Typography>
              <Divider/>
              <Typography variant="body1" align='center'>Catastrofe_Sample</Typography>
            </Stack>
          </Stack>
          <Stack direction="column" spacing={2}>
            <Button variant='contained' color='error'>Terminate</Button>
          </Stack>
        </Card>
        <Typography variant='h4'>Ayudas Pasadas</Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Fecha_Sample</Typography>
          </AccordionSummary>
          <AccordionDetails sx={'display:flex; justify-content: center '}>
              <Stack direction="row" spacing={2}>
                <Stack direction="column" spacing={2}>
                  <Typography variant="body1" align='center'>Resultado</Typography>
                  <Divider/>
                  <Typography variant="body1" align='center'>Resultado_Sample</Typography>
                </Stack>
                <Divider orientation='vertical'/>
                <Stack direction="column" spacing={2}>
                  <Typography variant="body1" align='center'>Avance</Typography>
                  <Divider/>
                  <Typography variant="body1" align='center'>voluntarios inscritos / Voluntarios pedidos</Typography>
                </Stack>
                <Divider orientation='vertical'/>
                <Stack direction="column" spacing={2}>
                  <Typography variant="body1" align='center'>Tipo de Catastrofe</Typography>
                  <Divider/>
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
                  <Divider/>
                  <Typography variant="body1" align='center'>Resultado_Sample</Typography>
                </Stack>
                <Divider orientation='vertical'/>
                <Stack direction="column" spacing={2}>
                  <Typography variant="body1" align='center'>Avance</Typography>
                  <Divider/>
                  <Typography variant="body1" align='center'>voluntarios inscritos / Voluntarios pedidos</Typography>
                </Stack>
                <Divider orientation='vertical'/>
                <Stack direction="column" spacing={2}>
                  <Typography variant="body1" align='center'>Tipo de Catastrofe</Typography>
                  <Divider/>
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
