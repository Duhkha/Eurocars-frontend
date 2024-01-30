import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CarService,GarageService } from '../services';
import { Car } from '../utils/types';
import { BASE_URL } from '../constants';
import '../assets/css/CarPage.css'; 
import Modal from 'react-bootstrap/Modal';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'; // Ensure you have 'react-icons' installed
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { logout } from '../store/authSlice';
import  useCarById  from '../hooks/useCarById'; 
import { useAddCarToGarage } from '../hooks/useAddCarToGarage'; 


type Props = {}

const CarPage = (props: Props) => {
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const { data: car, isLoading, isError, error } = useCarById(id || '');
    const { mutate: addToGarage, isLoading: isAddingToGarage } = useAddCarToGarage();
        
    const { userToken } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();


    if (isLoading || isAddingToGarage) {
        return <p>Loading...</p>;
    }

    if (isError || error) {
        return <p>Error: {error?.message}</p>;
    }

    if (!car) {
        return <p>The requested car does not exist.</p>;
    }

    const handleAddToGarage = () => {
        if (id) {
            addToGarage(id);
        }
    };




    

    const fullImageUrls = car.imageUrls.map((imageName: any) => `${BASE_URL}/images/${imageName}`);
    
    const openModalWithImage = (index: React.SetStateAction<number>) => {
        setSelectedImageIndex(index);
        setShowModal(true);
    };

    const goToPrevious = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : fullImageUrls.length - 1
        );
    };

    const goToNext = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex < fullImageUrls.length - 1 ? prevIndex + 1 : 0
        );
    };

    return (
        <div className="car-page-container">
            <Link to="/cars" className="back-to-list">Back to list</Link>
            <div className="car-header">
                <h1 className="car-title">{`${car.make} ${car.model} ${car.year}`}</h1>
            </div>
            <div className="car-images">
                {fullImageUrls.map((fullUrl, index: number) => (
                    <img key={index} src={fullUrl} alt={`${car.make} ${car.model} view ${index}`} onClick={() => openModalWithImage(index)} className={index === 0 ? "main-image" : "thumbnail-image"} />
                ))}
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <img src={fullImageUrls[selectedImageIndex]} className="img-fluid modal-image" alt={`${car.make} ${car.model} view ${selectedImageIndex}`} />
                </Modal.Body>
                <Modal.Footer>
                    <BsArrowLeft onClick={goToPrevious} className="modal-navigation-arrow" />
                    <BsArrowRight onClick={goToNext} className="modal-navigation-arrow" />
                </Modal.Footer>
            </Modal>

            <div className="car-content">


                <div className="car-specs">
                <h3>Specifications:</h3>
                    <p><strong>Make:</strong> {car.make}</p>
                    <p><strong>Model:</strong> {car.model}</p>
                    <p><strong>Mileage:</strong> {car.mileage.toLocaleString()} KM</p>
                    <p><strong>Year:</strong> {car.year}</p>
                    <p><strong>Price with Tax:</strong> ${car.priceWithTax.toLocaleString()}</p>
                    <p><strong>Price without Tax:</strong> ${car.priceWithoutTax.toLocaleString()}</p>
                    <p><strong>Motor:</strong> {car.motor}</p>
                    <p><strong>Motor Capacity:</strong> {car.motorCapacity} cc</p>
                    <p><strong>Fuel:</strong> {car.fuel}</p>
                    <p><strong>Motor Strength:</strong> {car.motorStrength}</p>
                    <p><strong>Emission Standard:</strong> {car.emissionStandard}</p>
                    <p><strong>Drivetrain:</strong> {car.drivetrain}</p>
                    <p><strong>Country of Origin:</strong> {car.countryOfOrigin}</p>
                    <p><strong>Transmission:</strong> {car.transmission}</p>
                    <p><strong>Body Style:</strong> {car.bodyStyle}</p>
                    <p><strong>Car Color:</strong> {car.carColor}</p>
                    <p><strong>Number of Doors:</strong> {car.numCarDoors}</p>
                    <p><strong>Number of Seats:</strong> {car.numCarSeats}</p>
                    <p><strong>Fuel Economy:</strong> {car.fuelEconomy}</p>
                    <p><strong>Registration:</strong> {car.registration}</p>
                    <p><strong>Town:</strong> {car.town}</p>

                </div>
            </div>
            <div className="car-description">
                <h3>Description</h3>
                <p>{car.longNote}</p>
            </div>
            <div className="car-equipment">
                <h3>Equipment</h3>
                <ul>
                    {car.equipment.map((item: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
                <button className="contact-button">Contact</button>
                <button
                className="garage-button"
                onClick={handleAddToGarage}
                disabled={!userToken} // Disable if no user token
            >
                Add to My Garage
            </button>

        </div>
    );
};

export default CarPage;


