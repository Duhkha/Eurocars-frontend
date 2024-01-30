
import React from 'react';
import { MainCars } from '../../utils/types';
import CarCard from '../CarCard'; // Assuming CarCard is styled as needed
import CarCardCarousel from '../CarCardCarousel';
import './CarGrid.css'; 

type Props = {
  title: string;
  cars: MainCars[];
};

const CarGrid = ({ title, cars }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="car-grid">
        {cars.map(car => (
          <CarCardCarousel key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarGrid;
