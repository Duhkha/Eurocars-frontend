import { useQuery, UseQueryResult } from "react-query";
import { CarService } from "../services";
import { Car } from '../utils/types'; // Import the Car type

const useCarById = (carId: string): UseQueryResult<Car, Error> => {
    return useQuery<Car, Error>(['car', carId], () => CarService.getCarById(carId), {
        enabled: !!carId,
    });
};

export default useCarById;
