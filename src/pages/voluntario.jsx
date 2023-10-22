import React, { useState } from 'react';
import { Box, Button, Modal } from '@mui/material';
import { Search } from '../components/busqueda';
import NavBar from '../components/nav_bar';

export const Voluntario = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [listaAyudasModalOpen, setListaAyudasModalOpen] = useState(false); // Estado para el nuevo modal

  const openModal = () => {
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

  const props = {
    'tipo': 'Urgente',
    'dia': 'hoy',
    'lugar': 'Machupichu',
    'n_vol': 4,
    'distance': 1000
  };

  const nombres = ['Hernan', 'Juan', 'Maria', 'Pedro']; // Lista de nombres de ejemplo

  return (
    <div className='page'>
      <h1 className='page__title'>Chile Ayuda</h1>
      <NavBar />
      <h2>nombre_Voluntario</h2>
      <Box sx={{ display: 'grid' }}>
        <Button variant='contained' onClick={openModal}>
          Ayudar
        </Button>
        <Button variant='contained' onClick={openListaAyudasModal}> {/* Botón para abrir el modal de lista de ayudas */}
          Lista de ayudas
        </Button>
      </Box>

      <Search {...props} />
      <Button variant='contained'>Perfil</Button>

      <Modal open={modalOpen} onClose={closeModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 2,
          }}
        >
          Ya estás en la lista de ayuda
          <Button onClick={closeModal}>Cerrar</Button>
        </Box>
      </Modal>

      {/* Modal de Lista de Ayudas */}
      <Modal open={listaAyudasModalOpen} onClose={closeListaAyudasModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 2,
          }}
        >
          <h3>Lista de Ayudas</h3>
          <ul>
            {nombres.map((nombre, index) => (
              <li key={index}>{nombre}</li>
            ))}
          </ul>
          <Button onClick={closeListaAyudasModal}>Cerrar</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Voluntario;