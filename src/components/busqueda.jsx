import * as React from 'react';
import {Box,Card,CardContent,CardMedia,CardActionArea,Typography, Container} from '@mui/material';
import SOS from '../assets/2785651.png'

export const Search = () => {
    return (
        <Card className='entry'>
            <CardActionArea  className='entry-button'>
                <Box className='first'>
                    <CardMedia
                        className='sos'
                        component="img"
                        src={SOS}
                        alt="Live from space album cover"
                    />
                    <Typography className='Tipo'>Urgente</Typography>
                </Box>
                <CardContent>
                    <Typography component="div" variant="subtitle1" color="text.secondary" className='fecha'>Dia</Typography>
                    <Typography className='Place' variant='h4'>Lugar</Typography>
                    <Typography className='Num_voluntarios' variant='body'>Voluntarios: numero</Typography>
                </CardContent>
                <CardContent>
                    <Typography className='Distancia' variant='h3' component="div">km</Typography>
                </CardContent>
            </CardActionArea>
        </Card>

    );
}

export default Search;