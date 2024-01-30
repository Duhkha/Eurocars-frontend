import { Link } from "react-router-dom";
import { Car } from "../../utils/types";
import { useState } from "react";
import { BASE_URL } from '../../constants';
import './CarCard.css'; 




type Props = {
  car: Car;
  onRemove?: (carId: string) => void;
  showDeleteButton?: boolean; 
};

const CarCard = ({ car,onRemove, showDeleteButton = false  }: Props) => {
  const imageUrl = car.firstImageUrl 
    ? `${BASE_URL}/images/${car.firstImageUrl}` 
    : car.imageUrls.length > 0 
      ? `${BASE_URL}/images/${car.imageUrls[0]}` 
      : ''; // Fallback if there are no images

  return (
    <div className="col-12 col-md-3 m-3">
      <Link to={`/cars/${car.id}`} style={{ textDecoration: 'none' }}>
        <div className="card">
        {imageUrl &&  (
            <img src={imageUrl} alt={`${car.make} ${car.model}`} className="card-img-top" />
          )}
          <div className="card-body">
            <h5 className="card-title">{`${car.year} ${car.make} ${car.model}`}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Price: {car.priceWithTax} €</h6>
            <h6 className="card-subtitle mb-2 text-muted">Milage: {car.mileage} KM</h6>
            
          </div>
        </div>
      </Link>
      {showDeleteButton && onRemove && (
        <button className="btn btn-danger" onClick={() => onRemove(car.id)}>Remove from Garage</button>
      )}
    </div>
  );
};

export default CarCard;


//          <img src={`${car.img}?w=248&fit=crop&auto=format`} className="card-img-top car-image" />      
