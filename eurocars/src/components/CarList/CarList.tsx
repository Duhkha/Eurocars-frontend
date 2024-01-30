import { useState,useEffect } from 'react'
//import {carList} from '../../constants'
import CarCard from '../CarCard/CarCard'
import { Car,PaginatedResponse,FilterParams } from '../../utils/types';
import { CarService } from '../../services';
import './CarList.css'; 
import CarFilter from '../CarFilter';




const CarList = () => {
    const[cars,setCars]=useState<Car[]>([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<any>();
    const [pagination, setPagination] = useState({
        totalElements: 0,
        totalPages: 0,
        currentPage: 0,
        size:4
      });
    const [filterParams, setFilterParams] = useState<FilterParams>({
        sortBy: 'make',
        sortOrder: 'ASC',
        make: [],
      minPrice: undefined,
      maxPrice: undefined,
      minYear: undefined,
      maxYear: undefined,
      minMileage: undefined,
      maxMileage: undefined,
      bodyStyle:[],
      transmission:[],
      fuel:[],
      town: [],
      carStatus:[]
    });
    const [selectedSort, setSelectedSort] = useState('make ASC'); 

    useEffect(() => {
        fetchCars(pagination.currentPage, pagination.size, filterParams);
    }, [filterParams, pagination.currentPage, pagination.size]);

      //pagination.size add to gore
    
      const fetchCars = async (page: number, size: number, filters: FilterParams) => {
        try {
            setIsLoading(true);
            const response = await CarService.getCars(page, size, filters);
            setCars(response.content);
            setPagination({
                totalElements: response.totalElements,
                totalPages: response.totalPages,
                currentPage: response.number,
                size: response.size,  // Update the size based on the response, if necessary
            });
        } catch (err) {
            setError('Failed to load cars');
        } finally {
            setIsLoading(false);
        }
    };
  

    // Create an array of page numbers for rendering the page buttons
    const pageNumbers = [];
    for (let i = 1; i <= pagination.totalPages; i++) {
        pageNumbers.push(i);
    }
    
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading cars!</p>;

    const handlePageClick = (page: number) => {
        setPagination(prev => ({ ...prev, currentPage: page }));
    };

    const handlePrevious = () => {
        setPagination(prev => ({ ...prev, currentPage: prev.currentPage - 1 }));
    };

    const handleNext = () => {
        setPagination(prev => ({ ...prev, currentPage: prev.currentPage + 1 }));
    };


    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelectedSort(selectedValue); // Update the selected sort state
        const [sortBy, sortOrder] = selectedValue.split(" ");
        setFilterParams(prev => ({ ...prev, sortBy, sortOrder }));
    };

    const handleApplyFilters = (filters: FilterParams) => {
        // Update filters for make, year, price, and mileage
        setFilterParams(prev => ({
            ...prev,
            make: filters.make,
            minYear: filters.minYear,
            maxYear: filters.maxYear,
            minPrice: filters.minPrice,
            maxPrice: filters.maxPrice,
            minMileage: filters.minMileage,
            maxMileage: filters.maxMileage,
            bodyStyle: filters.bodyStyle,
            fuel: filters.fuel,
            transmission: filters.transmission,
            town: filters.town,
            carStatus: filters.carStatus
        }));
    };
    
    
    
      


    return (

        <div className="car-list-page">

            
            

            <div className="car-list-container">

            <div className="sort-controls">
                {/* ... sort controls ... */}
                <select name="sort" value={selectedSort} onChange={handleSortChange}>                
                <option value="make ASC">Make Ascending</option>
                <option value="make DESC">Make Descending</option>
                <option value="priceWithTax ASC">Price Ascending</option>
                <option value="priceWithTax DESC">Price Descending</option>
                <option value="year ASC">Year Ascending</option>
                <option value="year DESC">Year Descending</option>
                <option value="mileage ASC">Mileage Ascending</option>
                <option value="mileage DESC">Mileage Descending</option>
                {/* Add more combined sort fields as needed */}
            </select>
            </div>







                {cars.map((car) => (
                <CarCard key={car.id} car={car} />
                ))}

                <div className="pagination-controls">
                                {/* ... pagination controls ... */}
                                <button onClick={handlePrevious} disabled={pagination.currentPage === 0}>
                                    Previous
                                </button>
                                {pageNumbers.map(number => (
                                    <button
                                        key={number}
                                        onClick={() => handlePageClick(number - 1)}
                                        className={pagination.currentPage === number - 1 ? 'active' : ''}
                                    >
                                        {number}
                                    </button>
                                ))}
                                <button onClick={handleNext} disabled={pagination.currentPage === pagination.totalPages - 1}>
                                    Next
                                </button>
                            </div>




            </div>
            <CarFilter onApplyFilters={handleApplyFilters} />
            
        </div>
    );
};

export default CarList