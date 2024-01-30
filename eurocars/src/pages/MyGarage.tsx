import React, { useEffect, useState } from 'react';
import { GarageService } from '../services';
import { CarService } from '../services';
import { Car } from '../utils/types';
import CarCard from '../components/CarCard';
import  {useRemoveCarFromGarage}  from '../hooks/useRemoveCarFromGarage'; 

type Props = {}


const MyGarage = (props: Props) => {

  const [cars, setCars] = useState<Car[]>([]);
  const { mutate: removeCar, isLoading: isRemoving } = useRemoveCarFromGarage();


  useEffect(() => {
    loadGarage();
}, []);



const handleRemoveCar = async (carId: string) => {
  removeCar(carId, {
      onSuccess: () => {
          loadGarage(); // Reload the garage to update the list
      }
  });
};


const loadGarage = async () => {
        try {
            const userGarage = await GarageService.getUserGarage();
            const carDetailsPromises = userGarage.carIds.map((carId: string) => CarService.getCarById(carId));
            const carDetails = await Promise.all(carDetailsPromises);
            console.log(carDetails)
            setCars(carDetails);
        } catch (error) {
            console.error('Error fetching garage data:', error);
        }
    };



    return (
      <div className="row">
          {cars.map(car => (
        <CarCard key={car.id} car={car} onRemove={handleRemoveCar} showDeleteButton={true} />          ))}
      </div>
  );
}


export default MyGarage
