// Import necessary dependencies from React, React Router, and Material-UI
import { Link } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Create styled components using Material-UI's styled function
const StyledContainer = styled(Container)(({ theme }) => ({
    textAlign: 'center',
    padding: theme.spacing(4),
}));

const StyledImage = styled('img')({
    width: '100%',
    height: 'auto',
    margin: '20px 0',
});

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[5],
}));

const HomePage = () => {
    return (
        <StyledContainer>
            <StyledImage 
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/382055555/original/d4e9574d57e896c20b64b32ad5c09b4c17cf6b86/create-car-dealer-website.jpg" 
                alt="Car Dealership" 
            />
            <StyledBox>
                <Typography variant="h2" component="h1" gutterBottom>
                    Welcome to AutoDeals
                </Typography>
                <Typography variant="h5" component="p" gutterBottom>
                    Find your dream car with us! We offer the best deals on new and used cars.
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    component={Link} 
                    to="/cars"
                    sx={{ mt: 2 }}
                >
                    View Car List
                </Button>
            </StyledBox>
        </StyledContainer>
    );
};

export default HomePage;