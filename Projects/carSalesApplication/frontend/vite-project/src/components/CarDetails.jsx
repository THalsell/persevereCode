import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getCarById } from "../utls/userHelper";

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
        <div>
            <h2>{car.make} {car.model}</h2>
            <img src={car.photo} alt={`${car.make} ${car.model}`} height="140" width="120" />
            <p>Rating: {car.rating}</p>
            <p>Price: ${car.price}</p>
            <Link to="/cars">
            <button>Back</button>
            </Link>
        </div>
    );
};

export default CarDetails;