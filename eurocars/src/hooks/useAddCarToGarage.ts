import { useMutation, UseMutationResult } from "react-query";
import { GarageService } from "../services";

export const useAddCarToGarage = (): UseMutationResult<void, Error, string> => {
    return useMutation<void, Error, string>(
        (carId: string) => GarageService.addCarToGarage(carId),
        {
            onSuccess: () => {
                alert('Car added to your garage successfully!');            },
            onError: (error: Error) => {
                alert(`Error: ${error.message}`);
                console.error('Error adding car to garage:', error);
            },
        }
    );
};
