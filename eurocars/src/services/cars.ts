import appAxios from "./appAxios";
import { PaginatedResponse,Car,FilterParams } from "../utils/types";


const getCars = async (
    page: number = 0, 
    size: number = 4,
    filters: FilterParams): Promise<PaginatedResponse<Car>>  => {
        const params = new URLSearchParams();
        params.append('page', page.toString());
        params.append('size', size.toString());
        params.append('sortBy', filters.sortBy);
        params.append('sortOrder', filters.sortOrder);
    
        // Append 'make' filters if present
        if (filters.make && filters.make.length > 0) {
            filters.make.forEach(make => {
                params.append('make', make);
            });
        }

        
    
        // Append 'minYear' and 'maxYear' if present
        if (filters.minYear !== undefined) {
            params.append('minYear', filters.minYear.toString());
        }
        if (filters.maxYear !== undefined) {
            params.append('maxYear', filters.maxYear.toString());
        }

        if (filters.minPrice !== undefined) {
            params.append('minPrice', filters.minPrice.toString());
        }
        if (filters.maxPrice !== undefined) {
            params.append('maxPrice', filters.maxPrice.toString());
        }

        if (filters.fuel && filters.fuel.length > 0) {
                filters.fuel.forEach(fuel => {
                    params.append('fuel', fuel);
                });
            }

    // Append 'transmission' filters if present
        if (filters.transmission && filters.transmission.length > 0) {
            filters.transmission.forEach(transmission => {
                params.append('transmission', transmission);
            });


        if (filters.bodyStyle && filters.bodyStyle.length > 0) {
                    filters.bodyStyle.forEach(style => {
                        params.append('bodyStyle', style);
                    });
                }

               
    } 

        if (filters.minMileage !== undefined) {
            params.append('minMileage', filters.minMileage.toString());
        }
        if (filters.maxMileage !== undefined) {
            params.append('maxMileage', filters.maxMileage.toString());
        }

         // Append 'fuel' filters if present

         if (filters.town && filters.town.length > 0) {
            filters.town.forEach(style => {
                params.append('town', style);
            });
        }

        if (filters.carStatus && filters.carStatus.length > 0) {
            filters.carStatus.forEach(style => {
                params.append('carStatus', style);
            });
        }
    
    
        




        console.log("Full API Request URL:", `/cars?${params.toString()}`);

    return appAxios.get(`/cars`, { params: params  }).then(
        (response) => {
            console.log(response.data)
            // You may want to return the whole paginated response to the caller
            // so that pagination details can be used in the component.
            return response.data;
        });
 }

 const getCarById = async (id: string) => {
    try {
      const response = await appAxios.get(`/cars/${id}`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      throw error;
    }
  };



//delete add cars

export default { getCars,getCarById };
