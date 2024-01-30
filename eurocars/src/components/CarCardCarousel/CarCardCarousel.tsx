import React from "react";
import { Link } from "react-router-dom";
import { MainCars } from "../../utils/types";  
import { BASE_URL } from '../../constants'; 

type Props = {
  car: MainCars;
};

const CarCardCarousel = ({ car }: Props) => {
  const imageUrl = car.firstImageUrl 
    ? `${BASE_URL}/images/${car.firstImageUrl}` 
    : ''; 


    return (
      <div className="col-12 col-md-3 m-3">
        <Link to={`/cars/${car.id}`} style={{ textDecoration: 'none' }}>
          <div className="card">
            {imageUrl && <img src={imageUrl} className="card-img-top car-image" alt={`${car.make} ${car.model}`} />}    
            <div className="card-body">
              <h5 className="card-title">{`${car.year} ${car.make} ${car.model}`}</h5>
              <p className="card-text">Price: €{car.priceWithTax}</p>
            </div>
          </div>
        </Link>
      </div>
    );
};

export default CarCardCarousel;
