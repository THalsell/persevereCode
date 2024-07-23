import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Car Dealership</h1>
      <Link to="/cars">View Car List</Link>
    </div>
  );
};

export default HomePage;