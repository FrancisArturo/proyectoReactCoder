import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';



const Cardproduct = ({producto}) => {
  return (
    <Link to={`/item/${producto.id} `} >
      <Card sx={{ maxWidth: 345, m: 7 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={producto.image} 
          alt={producto.title}
        
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
              {producto.title}
          </Typography>
          <Typography variant="h5" color="text">
          $ {producto.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Link>
  )
}

export default Cardproduct
