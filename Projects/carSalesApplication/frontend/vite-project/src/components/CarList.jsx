import { useState, useEffect } from "react";
import { getAllCars } from "../utls/userHelper";
import { Card, CardMedia, CardContent, Typography, Grid, Container, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';


const StyledCard = styled(Card)(({ theme }) => ({
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: theme.shadows[10],
    },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(4),
    position: 'relative'
}));


const StyledBackButton = styled(Button)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(2),
    left: theme.spacing(2),
    color: 'white',
    backgroundColor: 'black',
    boxShadow: 'none',
    '&:hover': {
        backgroundColor: 'darkgray',
        boxShadow: 'none',
    },
}));

const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const data = await getAllCars();
                if (data) {
                    setCars(data);
                }
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };

        fetchCars();
    }, []);

    // Handle click event to navigate to the car details page
    const handleClick = (id) => {
        window.location.href = `/car/${id}`;
    };

    return (
        <StyledContainer maxWidth="lg">
            <StyledBackButton 
                component={Link} 
                to="/"
            >
                Back
            </StyledBackButton>
            <Typography variant="h4" component="h1" gutterBottom>
                Car Listings
            </Typography>
            <Grid container spacing={3}>
                {cars.map((item) => (
                    <Grid item key={item._id} xs={12} sm={6} md={4} lg={3}>
                        <StyledCard onClick={() => handleClick(item._id)}>
                            <CardMedia
                                component="img"
                                image={item.photo}
                                alt={`${item.make} ${item.model}`}
                                height="200"
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
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </StyledContainer>
    );
};

export default CarList;