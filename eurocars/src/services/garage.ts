import appAxios from "./appAxios";
import { AddCars,Car } from "../utils/types";

const getUserGarage = async () => {
    const response = await appAxios.get('/myGarage/', {
        headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}`, },
    });
    console.log(response.data)
    return response.data;
};

const addCarToGarage = async (carId: any) => {
    const response = await appAxios.post(`/myGarage/add-car/${carId}`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` }
    });
    return response.data;
};


const removeCarFromGarage   = async (carId: any) => {
    const response = await appAxios.delete(`/myGarage/remove-car/${carId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` }
    });
    return response.data;
};


export default { getUserGarage,addCarToGarage,removeCarFromGarage  };