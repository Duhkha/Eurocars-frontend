import { useMutation, UseMutationResult } from "react-query";
import { GarageService } from "../services";

export const useRemoveCarFromGarage = (): UseMutationResult<void, Error, string> => {
    return useMutation<void, Error, string>(
        (carId: string) => GarageService.removeCarFromGarage(carId),
        {
            onSuccess: () => {
                alert('Car removed from your garage successfully!');
            },
            onError: (error: Error) => {
                alert(`Error: ${error.message}`);
            },
        }
    );
};
