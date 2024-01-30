import { useQuery } from "react-query";
import { CarService } from "../services";
import { FilterParams } from "../utils/types";

const useCars = (page: number, size: number, filters: FilterParams) => {
    return useQuery(
        ['cars', page, size, filters], 
        () => CarService.getCars(page, size, filters),
        {
            keepPreviousData: true, 
        }
    );
}

export default useCars;
