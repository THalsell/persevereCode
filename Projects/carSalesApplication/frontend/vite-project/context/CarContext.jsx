
import { createContext, useState, useEffect } from 'react';
import { getAllCars, getCarById } from '../utls/userHelper';

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);

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

    const fetchCarById = async (id) => {
        try {
            const data = await getCarById(id);
            if (data) {
                setSelectedCar(data);
            }
        } catch (error) {
            console.error('Error fetching car:', error);
        }
    };

    return (
        <CarContext.Provider value={{ cars, selectedCar, fetchCarById }}>
            {children}
        </CarContext.Provider>
    );
};

