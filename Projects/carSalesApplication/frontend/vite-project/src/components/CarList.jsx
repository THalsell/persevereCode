import { useState, useEffect } from "react";
import { getAllCars } from "../utls/userHelper";


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
      <div>
        {cars.map((item, index) => (
          <div key={index} onClick={() => handleClick(item.id)} >
            <img src={item.photo} alt={`${item.make} ${item.model}`} height="140" width="120" />
            <h3>{item.make} {item.model}</h3>
            <p>Rating: {item.rating}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    );
}

export default CarList;