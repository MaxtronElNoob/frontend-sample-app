import * as React from 'react'; // Import useState from React
import "leaflet/dist/leaflet.css";
import { Modal, Button, Box, Typography } from "@mui/material";

import NavBar from '../components/nav_bar';
import {MapContainer ,TileLayer, Marker, popUp, Popup} from "react-leaflet";
import {Icon} from "leaflet";

export const HomePage = () => {
  const markers = [
    {
      geocode: [-33.46, -70.67],
      popUp: "Tipo de Emergencia: Terremoto"
    },
    {
      geocode: [-33.43, -70.64],
      popUp: "I am pop up 2"
    },
    {
      geocode: [-33.45, -70.70],
      popUp: "I am pop up 3"
    }
  ];

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
    iconSize: [38,38]
  })

  return (
    <div className='page'>
      <NavBar />
      <h2>Página de Inicio</h2>

      <MapContainer center = {[-33.4489, -70.6693]} zoom={12} style={{height:'500px', width:'100%'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map(marker => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>
              {marker.popUp}
            </Popup>
          </Marker>
        ))

        }
      </MapContainer>
    </div>
  );
}

export default HomePage;