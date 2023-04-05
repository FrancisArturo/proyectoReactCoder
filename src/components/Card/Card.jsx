import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Rating } from '@mui/material';
import { Link } from 'react-router-dom';



const Cardproduct = ({producto}) => {
  return (
    <Link to={`/item/${producto.id}`} >
      <Card sx={{ Width: 150, m: 7 }} className='card'>
      <CardActionArea className='cardContainer'>
        <div className='cards'>
        <CardMedia
          component="img"
          height="140"
          image={producto.image} 
          alt={producto.title}
        />
        </div>

        <CardContent className='w-100 mt-3'>
          <Typography gutterBottom variant="h6" component="div">
              {producto.title}
          </Typography>
          <Typography variant="h5" color="text">
          $ {producto.price}
          </Typography>
          <br />
          <Rating name="rate-number" value={producto.rating.rate} readOnly />
        </CardContent>
      </CardActionArea>
    </Card>
  </Link>
  )
}

export default Cardproduct
