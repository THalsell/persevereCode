import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <img 
        src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/382055555/original/d4e9574d57e896c20b64b32ad5c09b4c17cf6b86/create-car-dealer-website.jpg" 
        alt="Car Dealership" 
        style={{ width: '100%', height: 'auto', margin: '20px 0' }} 
      />
      <Link to="/cars">View Car List</Link>
    </div>
  );
};

export default HomePage;