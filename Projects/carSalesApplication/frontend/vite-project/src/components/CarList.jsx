import { useState, useEffect } from "react";
import { getAllCars } from "../utls/userHelper";
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';


const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            const data = await getAllCars();
            if (data) {
                console.log(data)
                setCars(data);
            }
        };

        fetchCars();
    }, []);

    const handleClick = (id) => {
      
         window.location.href = `/car/${id}`;
      };

    return (
      <Grid container spacing={2}>
      {cars.map((item, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Card onClick={() => handleClick(item._id)} sx={{ cursor: 'pointer' }}>
            <CardMedia
              component="img"
              image={item.photo}
              alt={`${item.make} ${item.model}`}
              height="140"
              sx={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {item.make} {item.model}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating: {item.rating}
              </Typography>
              <Typography variant="body2" color="text.primary">
                ${item.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    );
}

export default CarList;