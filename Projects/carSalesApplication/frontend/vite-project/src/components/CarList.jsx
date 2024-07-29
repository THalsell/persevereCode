import { useState, useEffect } from "react";
import { getAllCars } from "../utls/userHelper";
import { Card, CardMedia, CardContent, Typography, Grid, Container, Button, TextField, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

// Create styled components for CarList
const StyledCard = styled(Card)(({ theme }) => ({
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: theme.shadows[10],
    },
    height: '350px', 
}));

const StyledContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(4),
    position: 'relative'
}));


const StyledButton = styled(Button)(() => ({
    color: 'white',
    backgroundColor: 'black',
    boxShadow: 'none',
    '&:hover': {
        backgroundColor: 'darkgray',
        boxShadow: 'none',
    },
}));

// Set fixed height for CardContent and handle overflow
const StyledCardContent = styled(CardContent)({
    height: '120px',
    overflow: 'hidden',

});

const CarList = () => {
    const [cars, setCars] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredCars, setFilteredCars] = useState([]);

    // Fetch car data when the component mounts
    useEffect(() => {
        const fetchCars = async () => {
            try {
                const data = await getAllCars();
                if (data) {
                    setCars(data);
                    setFilteredCars(data);
                }
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };

        fetchCars();
    }, []);

    // Handle search functionality
    const handleSearch = () => {
        const filtered = cars.filter(car => car.make.toLowerCase().includes(search.toLowerCase()));
        setFilteredCars(filtered);
    };

    // Handle click event to navigate to the car details page
    const handleClick = (id) => {
        window.location.href = `/car/${id}`;
    };

    return (
        <StyledContainer maxWidth="lg">
            <StyledButton 
                component={Link} 
                to="/"
                sx={{ position: 'absolute', top: 16, left: 16 }}
            >
                Back
            </StyledButton>
            <Typography variant="h4" component="h1" gutterBottom>
                Car Listings
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
                <TextField 
                    label="Search by Make" 
                    variant="outlined" 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    sx={{ mr: 2 }}
                />
                <StyledButton variant="contained" onClick={handleSearch}>
                    Search
                </StyledButton>
            </Box>
            <Grid container spacing={3}>
                {filteredCars.map((item) => (
                    <Grid item key={item._id} xs={12} sm={6} md={4} lg={3}>
                        <StyledCard onClick={() => handleClick(item._id)}>
                            <CardMedia
                                component="img"
                                image={item.photo}
                                alt={`${item.make} ${item.model}`}
                                height="200"
                                sx={{ objectFit: 'cover' }}
                            />
                            <StyledCardContent>
                                <Typography variant="h6" component="div">
                                    {item.make} {item.model}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Rating: {item.rating}
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    ${item.price}
                                </Typography>
                            </StyledCardContent>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </StyledContainer>
    );
};

export default CarList;
