import * as React from 'react';
import {Box,Card,CardContent,CardMedia,CardActionArea,Typography, Container} from '@mui/material';
import SOS from '../assets/2785651.png'

export const Search = () => {
    return (
        <Card className='entry'>
            <CardActionArea sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                    <CardMedia
                        className='sos'
                        component="img"
                        src={SOS}
                        alt="Live from space album cover"
                    />
                    <Typography className='Tipo' component="div" variant='body1'>Urgente</Typography>
                </Box>
                <Box>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="subtitle1" color="text.secondary" className='fecha'>Dia</Typography>
                        <Typography className='Place' variant='h4'>Lugar</Typography>
                        <Typography className='Num_voluntarios' variant='body'>Voluntarios: numero</Typography>
                    </CardContent>
                </Box>
                <Typography className='Distancia' variant='h3' component="div">km</Typography>
            </CardActionArea>
        </Card>

    );
}

export default Search;