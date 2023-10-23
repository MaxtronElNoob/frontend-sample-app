import React, { useState } from 'react';
import { Box, Button, Container, Modal, Stack,Typography, Card,Divider } from '@mui/material';
import { Search } from '../components/busqueda';
import NavBar from '../components/nav_bar';
import data from '../bd/data.json';

export const Voluntario = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [listaAyudasModalOpen, setListaAyudasModalOpen] = useState(false);
  const [nVol, setNVol] = useState(4);
  const [nombres, setNombres] = useState(['Hernan', 'Juan', 'Maria', 'Pedro']);

  const openModal = () => {
    setNVol(nVol + 1);
    setNombres([...nombres, 'Pablo']);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openListaAyudasModal = () => {
    setListaAyudasModalOpen(true);
  };

  const closeListaAyudasModal = () => {
    setListaAyudasModalOpen(false);
  };

  return (
    <div className='page'>
      <NavBar />
      <Container className='detalles'>
        <Typography variant='h4'gutterBottom>Datos</Typography>
        <Card>
          <div className='boxDetalles'>
            <div>
            <Typography variant='h5' >Nombre:</Typography>
            <Typography className='dato' variant='h5'>{data.Voluntarios[0].nombre}</Typography>
            </div>
            <Divider className='detallesDivider'/>
            <div>
              <Typography variant='h5'>Edad:</Typography>
              <Typography className='dato' variant='h5'>21</Typography>
            </div>
            <Divider className='detallesDivider'/>
            <div>
              <Typography variant='h5'>Comuna:</Typography>
              <Typography className='dato' variant='h5'>La Reina</Typography>
            </div>
          </div>
        </Card>
      </Container>
      <Container className='reporteActivo'>
        <Typography variant='h4' gutterBottom>Reporte activo</Typography>
        <Card>
          <Stack direction="row" spacing={2} sx={{m: 1}}>
            <Stack direction="column" spacing={2} >
              <Typography variant="body1" align='center'>Fecha</Typography>
              <Divider/>
              <Typography variant="body1" align='center'>{data['ayudas'].find((entry) => entry['id'] === data.Solicitantes[0].ayudasActivas).dia}</Typography>
            </Stack>
            <Divider orientation='vertical'/>
            <Stack direction="column" spacing={2}>
              <Typography variant="body1" align='center'>Avance</Typography>
              <Divider/>
              <Typography variant="body1" align='center'>{data['ayudas'].find((entry) => entry['id'] === data.Solicitantes[0].ayudasActivas).n_vol} / {data['ayudas'].find((entry) => entry['id'] === data.Solicitantes[0].ayudasActivas).volMax}</Typography>
            </Stack>
            <Divider orientation='vertical'/>
            <Stack direction="column" spacing={2}>
              <Typography variant="body1" align='center'>Catastrofe</Typography>
              <Divider/>
              <Typography variant="body1" align='center'>{data['ayudas'].find((entry) => entry['id'] === data.Solicitantes[0].ayudasActivas).tipo}</Typography>
            </Stack>
          </Stack>
          <Stack direction="column" spacing={2}>
            <Button variant='contained' color='error'>Terminate</Button>
          </Stack>
        </Card>
      </Container>


      <Modal open={modalOpen} onClose={closeModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 2,
          }}
        >
          {data['ayudas'].map((ayuda,index)=><Search key={index}  {...ayuda} />)}
          <Button onClick={closeModal}>Cerrar</Button>
        </Box>
      </Modal>

      <Modal open={listaAyudasModalOpen} onClose={closeListaAyudasModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 2,
          }}
        >
          <h3>Lista de Ayudas</h3>
          {data['ayudas'].map((ayuda,index)=><Search key={index}  {...ayuda} />)}
          <Button onClick={closeListaAyudasModal}>Cerrar</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Voluntario;