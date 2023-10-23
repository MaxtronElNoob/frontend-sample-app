import * as React from 'react'; // Import useState from React
import {Accordion,Typography,AccordionSummary,AccordionDetails,Stack,Divider, Container} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavBar from '../components/nav_bar';
import data from '../bd/data.json';

export const Historial = () => {
    return (
    <div className='page'>
        <NavBar />
        <Container>
            <h2>Historial</h2>
            <Typography variant='h4' gutterBottom>Reportes anteriores</Typography>
            {data.Solicitantes[0].historial.map((id) => (
                <Accordion key={id}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Typography>{data['ayudas'].find((entry) => entry['id'] === id).dia}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack direction="row" spacing={2}>
                        <Divider orientation='vertical'/>
                        <Stack direction="column" spacing={2}>
                            <Typography variant="body1" align='center'>Avance</Typography>
                            <Divider/>
                            <Typography variant="body1" align='center'>{data['ayudas'].find((entry) => entry['id'] === id).n_vol} / {data['ayudas'].find((entry) => entry['id'] === id).volMax}</Typography>
                        </Stack>
                        <Divider orientation='vertical'/>
                        <Stack direction="column" spacing={2}>
                            <Typography variant="body1" align='center'>Tipo de Catastrofe</Typography>
                            <Divider/>
                            <Typography variant="body1" align='center'>{data['ayudas'].find((entry) => entry['id'] === id).tipo}</Typography>
                        </Stack>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            ))}
            <Typography variant='h4' gutterBottom>Voluntariados anteriores</Typography>
            {data.Solicitantes[0].historial.map((id) => (
            <Accordion key={id}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography>{data['ayudas'].find((entry) => entry['id'] === id).dia}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack direction="row" spacing={2}>
                    <Divider orientation='vertical'/>
                    <Stack direction="column" spacing={2}>
                        <Typography variant="body1" align='center'>Avance</Typography>
                        <Divider/>
                        <Typography variant="body1" align='center'>{data['ayudas'].find((entry) => entry['id'] === id).n_vol} / {data['ayudas'].find((entry) => entry['id'] === id).volMax}</Typography>
                    </Stack>
                    <Divider orientation='vertical'/>
                    <Stack direction="column" spacing={2}>
                        <Typography variant="body1" align='center'>Tipo de Catastrofe</Typography>
                        <Divider/>
                        <Typography variant="body1" align='center'>{data['ayudas'].find((entry) => entry['id'] === id).tipo}</Typography>
                    </Stack>
                    </Stack>
                </AccordionDetails>
            </Accordion>
            ))}
        </Container>
    </div>
  );
}

export default Historial;