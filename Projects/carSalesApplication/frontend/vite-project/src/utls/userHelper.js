import axios from 'axios';

const getAllCars = async () => {
    try {
        const response = await axios.get("http://localhost:3000/car");
        return response.data;
    } catch (e) {
        console.error(e);
    }
};

const getCarById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3000/car/${id}`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
};

export { getAllCars, getCarById };

