import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getCarById } from "../utls/userHelper";
import { Container, Typography, Card, CardMedia, CardContent, Button} from '@mui/material';

const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {
        const fetchCar = async () => {
            const data = await getCarById(id);
            if (data) {
                console.log(data); 
                setCar(data);
            }
        };

        fetchCar();
    }, [id]);

    if (!car) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            
            <Card sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
                <CardMedia
                    component="img"
                    height="400"
                    image={car.photo}
                    alt={`${car.make} ${car.model}`}
                />
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        {car.year} {car.make} {car.model}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        <strong>Rating:</strong> {car.rating}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        <strong>Mileage:</strong> {car.mileage}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        <strong>Price:</strong> ${car.price}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        <strong>Status:</strong> {car.status}
                    </Typography>
                </CardContent>
            </Card>
            <Button 
                
                component={Link} 
                to="/cars" 
                sx={{ 
                    position: 'absolute', 
                    top: 16, 
                    left: 16, 
                    color: 'white', 
                    backgroundColor: 'black',
                    boxShadow: 'none',
                    '&:hover': {
                        backgroundColor: 'darkgray',
                        boxShadow: 'none',
                    }
                 }}
            >
                Back
            </Button>
        </Container>
    );
};

export default CarDetails;