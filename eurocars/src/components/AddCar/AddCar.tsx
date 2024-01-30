import React, { useState } from 'react';
import { AdminService } from '../../services';
import { AddCars } from '../../utils/types';

const AddCar = () => {
    const initialState = {
        make: '',
        model: '',
        mileage: 0,
        year: 0,
        priceWithTax: 0,
        priceWithoutTax: 0,
        motor: '',
        motorCapacity: '',
        fuel: '',
        motorStrength: '',
        emissionStandard: '',
        drivetrain: '',
        countryOfOrigin: '',
        transmission: '',
        bodyStyle: '',
        carColor: '',
        numCarDoors: '',
        numCarSeats: '',
        fuelEconomy: '',
        registration: '',
        shortNote: '',
        longNote: '',
        equipment: [],
        town: ''
    };

    const [carData, setCarData] = useState<AddCars>(initialState);
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

        const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedFiles(e.target.files);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCarData({ ...carData, [e.target.name]: e.target.value });
    };

    const handleChangeArray = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const arrayValues = value.split(';').map((item) => item.trim());
        setCarData({ ...carData, [name]: arrayValues });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form Data:', carData);
        console.log('Selected Files:', selectedFiles);
        try {
            await AdminService.addCar(carData, selectedFiles);
            // Handle success (e.g., show success message, reset form)
            setCarData(initialState); // Reset form
            setSelectedFiles(null);    // Reset file input
        } catch (error) {
            console.error("Error during API call:", error);
            alert("Failed to add car.");
                }
    };
   

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="make">Make:</label>
                <input type="text" id="make" name="make" value={carData.make} onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="model">Model:</label>
                <input type="text" id="model" name="model" value={carData.model} onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="mileage">Mileage:</label>
                <input type="number" id="mileage" name="mileage" value={carData.mileage} onChange={handleChange} />
            </div>
    
            <div>
                <label htmlFor="year">Year:</label>
                <input type="number" id="year" name="year" value={carData.year} onChange={handleChange} />
            </div>
    
            <div>
                <label htmlFor="priceWithTax">Price With Tax:</label>
                <input type="number" id="priceWithTax" name="priceWithTax" value={carData.priceWithTax} onChange={handleChange} />
            </div>
    
            <div>
                <label htmlFor="priceWithoutTax">Price Without Tax:</label>
                <input type="number" id="priceWithoutTax" name="priceWithoutTax" value={carData.priceWithoutTax} onChange={handleChange} />
            </div>

            <div>
            <label htmlFor="motor">Motor:</label>
            <input type="text" id="motor" name="motor" value={carData.motor} onChange={handleChange} />
        </div>

        <div>
            <label htmlFor="motorCapacity">Motor Capacity:</label>
            <input type="text" id="motorCapacity" name="motorCapacity" value={carData.motorCapacity} onChange={handleChange} />
        </div>

        <div>
            <label htmlFor="fuel">Fuel:</label>
            <input type="text" id="fuel" name="fuel" value={carData.fuel} onChange={handleChange} />
        </div>

        <div>
            <label htmlFor="motorStrength">Motor Strength:</label>
            <input type="text" id="motorStrength" name="motorStrength" value={carData.motorStrength} onChange={handleChange} />
        </div>

        <div>
            <label htmlFor="emissionStandard">Emission Standard:</label>
            <input type="text" id="emissionStandard" name="emissionStandard" value={carData.emissionStandard} onChange={handleChange} />
        </div>

        <div>
            <label htmlFor="drivetrain">Drivetrain:</label>
            <input type="text" id="drivetrain" name="drivetrain" value={carData.drivetrain} onChange={handleChange} />
        </div>

        <div>
            <label htmlFor="countryOfOrigin">Country of Origin:</label>
            <input type="text" id="countryOfOrigin" name="countryOfOrigin" value={carData.countryOfOrigin} onChange={handleChange} />
        </div>

        <div>
            <label htmlFor="transmission">Transmission:</label>
            <input type="text" id="transmission" name="transmission" value={carData.transmission} onChange={handleChange} />
        </div>

        <div>
            <label htmlFor="bodyStyle">Body Style:</label>
            <input type="text" id="bodyStyle" name="bodyStyle" value={carData.bodyStyle} onChange={handleChange} />
        </div>

        <div>
            <label htmlFor="carColor">Car Color:</label>
            <input type="text" id="carColor" name="carColor" value={carData.carColor} onChange={handleChange} />
        </div>

        <div>
            <label htmlFor="numCarDoors">Number of Car Doors:</label>
            <input type="text" id="numCarDoors" name="numCarDoors" value={carData.numCarDoors} onChange={handleChange} />
        </div>

        <div>
            <label htmlFor="numCarSeats">Number of Car Seats:</label>
            <input type="text" id="numCarSeats" name="numCarSeats" value={carData.numCarSeats} onChange={handleChange} />
        </div>


            <div>
                <label htmlFor="fuelEconomy">Fuel Economy:</label>
                <input type="text" id="fuelEconomy" name="fuelEconomy" value={carData.fuelEconomy} onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="registration">Registration:</label>
                <input type="text" id="registration" name="registration" value={carData.registration} onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="shortNote">Short Note:</label>
                <textarea id="shortNote" name="shortNote" value={carData.shortNote} onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="longNote">Long Note:</label>
                <textarea id="longNote" name="longNote" value={carData.longNote} onChange={handleChange} />
            </div>            
            <div>
                <label htmlFor="town">Town:</label>
                <input type="text" id="town" name="town" value={carData.town} onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="equipment">Equipment:</label>
                <input type="text" id="equipment" name="equipment" onChange={handleChangeArray} 
                    placeholder="Enter equipment separated by semicolons" />
            </div>

            <div>
                <label htmlFor="carImages">Car Images:</label>
                <input type="file" id="carImages" multiple onChange={handleImageChange} />
            </div>    
    
            <button type="submit">Add Car</button>
        </form>
    )

    }

export default AddCar;
