import { useMutation, UseMutationResult } from 'react-query';
import { AdminService } from '../services';

export const useDeleteCar = (): UseMutationResult<void, Error, string> => {
    return useMutation<void, Error, string>(
        async (carId: string) => {
            await AdminService.deleteCar(carId);
        },
        {
            onSuccess: () => {
                alert('Car has been successfully deleted.');
            },
            onError: (error: Error) => {
                console.error('Error during deletion:', error);
                alert('Failed to delete the car.');
            },
        }
    );
};
