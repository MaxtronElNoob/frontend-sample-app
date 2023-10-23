import * as React from 'react';
import {Box,Card,CardContent,CardMedia,CardActionArea,Typography} from '@mui/material';
import SOS from '../assets/2785651.png'

export const Search = (props) => {
    const{urgencia,dia,lugar,n_vol,distance}=props;
    return (
        <Card className='entry'>
            <CardActionArea  className='entry-button'>
                <Box className='first'>
                    <CardMedia className='sos' component="img" src={SOS} alt="SOS"/>
                    <Typography className='Tipo'>{urgencia}</Typography>
                </Box>
                <CardContent>
                    <Typography component="div" variant="subtitle1" color="text.secondary" className='fecha'>{dia}</Typography>
                    <Typography className='Place' variant='h4'>{lugar}</Typography>
                    <Typography className='Num_voluntarios' variant='body'>Voluntarios: {n_vol}</Typography>
                    {/* <Typography className='Num_voluntarios' variant='body'>Status: {n_vol}</Typography> */}
                </CardContent>
                <CardContent>
                    <Typography className='Distancia' variant='h3' component="div">{distance} km</Typography>
                </CardContent>
            </CardActionArea>
        </Card>

    );
}

export default Search;