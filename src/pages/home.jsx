import * as React from 'react';
import "leaflet/dist/leaflet.css";
import NavBar from '../components/nav_bar';
import { Button, Modal, Box, Typography,Container, Divider} from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import data from '../bd/data.json';

export const HomePage = () => {
  const [listaAyudasModalOpen, setListaAyudasModalOpen] = React.useState(false);
  const openListaAyudasModal = () => {
    setListaAyudasModalOpen(true);
  };
  const closeListaAyudasModal = () => {
    setListaAyudasModalOpen(false);
  };
  const closeListaAyudasModalE = () => {
    setListaAyudasModalOpen(false);
    alert('Muchas gracias por inscribirte como voluntario');
  };
  const markers = [
    {
      geocode: [-33.46, -70.67],
      popUp: "Tipo de Emergencia: " + data.ayudas[0].tipo
    },
    {
      geocode: [-33.43, -70.64],
      popUp: "Tipo de Emergencia: " + data.ayudas[0].tipo
    },
    {
      geocode: [-33.45, -70.70],
      popUp: "Tipo de Emergencia: " + data.ayudas[0].tipo
    }
  ];

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
    iconSize: [38, 38]
  })

  return (
    <div className='page'>
      <NavBar />
      <h2>Mapa</h2>
      <MapContainer center={[-33.4489, -70.6693]} zoom={12} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => (
          <Marker position={marker.geocode} icon={customIcon} key={index}>
            <Popup>
              {marker.popUp}
              <Button onClick={openListaAyudasModal}>Detalles</Button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <Modal open={listaAyudasModalOpen} onClose={closeListaAyudasModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 2,
            borderRadius:'30px'
          }}
        >
      <Container className='detalles'>
        <Typography variant='h4'gutterBottom>Detalles</Typography>
          <div className='boxDetalles'>
            <div>
            <Typography variant='h5' >Tipo:</Typography>
            <Typography className='dato' variant='h5'>{data.ayudas[0].tipo}</Typography>
            </div>
            <Divider className='detallesDivider'/>
            <div>
              <Typography variant='h5'>Urgencia:</Typography>
              <Typography className='dato' variant='h5'>{data.ayudas[0].urgencia}</Typography>
            </div>
            <Divider className='detallesDivider'/>
            <div>
              <Typography variant='h5'>Distancia:</Typography>
              <Typography className='dato' variant='h5'>{data.ayudas[0].distance} [KM]</Typography>
            </div>
            <Divider className='detallesDivider'/>
            <div>
              <Typography variant='h5'>Voluntaros inscritos:</Typography>
              <Typography className='dato' variant='h5'>{Math.floor(Math.random()*10)}</Typography>
            </div>
          </div>
      </Container>
          <div className='buttonModal'>
            <Button variant='contained' onClick={closeListaAyudasModalE}>Unirse</Button>
            <Button variant='contained' onClick={closeListaAyudasModal} color='error'>Cerrar</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default HomePage;