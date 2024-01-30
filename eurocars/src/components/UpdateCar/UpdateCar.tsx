import React, { useState } from 'react';
import { AdminService } from '../../services';
import { AddCars } from '../../utils/types';
import { CarService } from '../../services';


const UpdateCar = () => {
    const [carId, setCarId] = useState('');
    const [carData, setCarData] = useState<AddCars>({
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
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setCarData({ ...carData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            await AdminService.updateCar(carId, carData);
            // Handle success (e.g., show success message)
        } catch (error) {
            // Handle error (e.g., show error message)
        }
    };

    const handleChangeArray = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const arrayValues = value.split(';').map((item) => item.trim());
        setCarData({ ...carData, [name]: arrayValues });
    };

    const fetchCarData = async (id: string) => {
        try {
            const data = await CarService.getCarById(id);
            setCarData(data);
        } catch (error) {
            console.error("Failed to fetch car data:", error);
            // Optionally handle error (e.g., show error message)
        }
    };
    
    // Use useEffect to fetch data when carId changes
    React.useEffect(() => {
        if (carId) {
            fetchCarData(carId);
        }
    }, [carId]);






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

          
            
            <button type="submit">Update Car</button>
        </form>
    );
};

export default UpdateCar;
