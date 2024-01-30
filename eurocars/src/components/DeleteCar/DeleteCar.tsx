import React, { useState } from 'react';
import { AdminService } from '../../services';
import { useDeleteCar } from '../../hooks/useDeleteCar';

const DeleteCar = () => {
    const [carId, setCarId] = useState('');
    const deleteCar = useDeleteCar(); // Use the hook

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!carId) {
            alert('Please enter a car ID.');
            return;
        }
        if (window.confirm(`Are you sure you want to delete the car with ID: ${carId}?`)) {
            deleteCar.mutate(carId); // Use the mutate function from the hook
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="carId">Car ID:</label>
                <input 
                    type="text" 
                    id="carId" 
                    value={carId} 
                    onChange={(e) => setCarId(e.target.value)} 
                />
            </div>
            <button type="submit">Delete Car</button>
        </form>
    );
};

export default DeleteCar;
