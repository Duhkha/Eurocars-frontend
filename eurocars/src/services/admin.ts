import appAxios from "./appAxios";
import { AddCars,Car } from "../utils/types";

const addCar = async (carData: AddCars, images: FileList | null) => {
    try {
        const formData = new FormData();

        // Append car data as JSON
        formData.append('car', JSON.stringify(carData));

        // Append images
        if (images) {
            Array.from(images).forEach(file => {
                formData.append('images', file);
            });
        }

        const response = await appAxios.post('/cars/add', formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`,
                // Don't set 'Content-Type' manually, let the browser set it
            },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};


const updateCar = async (carId: string, carData: AddCars) => {
    try {
        const response = await appAxios.put(`/cars/${carId}`, carData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

const deleteCar = async (carId: string) => {
    try {
        await appAxios.delete(`/cars/${carId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`,
            },
        });
    } catch (error) {
        throw error;
    }
};

export default { addCar, updateCar, deleteCar };
