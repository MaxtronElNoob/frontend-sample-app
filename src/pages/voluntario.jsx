import React, { useState } from 'react';
import { Box, Button, Container, Modal, Stack,Typography } from '@mui/material';
import { Search } from '../components/busqueda';
import NavBar from '../components/nav_bar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
      <Stack direction='row'>
        <AccountCircleIcon className='usuario' fontSize='large'/>
        <Typography variant='h2'>{data.Voluntarios[0].nombre}</Typography>
      </Stack>
      <Container>
        <Box sx={{ display: 'grid' }}>
          <Button variant='contained' onClick={openModal}>Ayudar</Button>
          <Button variant='contained' onClick={openListaAyudasModal}>Lista de ayudas</Button>
        </Box>
          {/* {data['ayudas'].map((ayuda,index)=><Search key={index}  {...ayuda} />)} */}
        <Button variant='contained'>Perfil</Button>
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
          {/* <ul>
            {nombres.map((nombre, index) => (
              <li key={index}>{nombre}</li>
            ))}
          </ul> */}
          {data['ayudas'].map((ayuda,index)=><Search key={index}  {...ayuda} />)}
          <Button onClick={closeListaAyudasModal}>Cerrar</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Voluntario;