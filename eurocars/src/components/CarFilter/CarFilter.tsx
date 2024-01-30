import React, { useState } from 'react';
import { FilterParams } from '../../utils/types';
import { carBrands, bodyStyle,fuels,transmissions, carStatuses,towns } from '../../constants';
import Select from 'react-select';
import './CarFilter.css'; 

type Props = {
    onApplyFilters: (filters: FilterParams) => void;
  };

  const brandOptions = carBrands.map(brand => ({ value: brand, label: brand }));
const bodyStyleOptions = bodyStyle.map(style => ({ value: style, label: style }));
const fuelOptions = fuels.map(fuel => ({ value: fuel, label: fuel }));
const transmissionOptions = transmissions.map(transmission => ({ value: transmission, label: transmission }));


  const CarFilter = (props: Props) => {
    const [localFilters, setLocalFilters] = useState<FilterParams>({
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
      town:[],
      carStatus:[],
  });

  const [selectedTowns, setSelectedTowns] = useState<string[]>([]);
  const [selectedCarStatuses, setSelectedCarStatuses] = useState<string[]>([]);


  const handleSelectChange = (selectedOptions: any, name: string) => {
    const values = selectedOptions ? selectedOptions.map((option: any) => option.value) : [];
    setLocalFilters(prevFilters => ({
      ...prevFilters,
      [name]: values,
    }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setLocalFilters(prevFilters => ({
      ...prevFilters,
      [name]: value !== '' ? Number(value) : undefined,
    }));
  };

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    selectedValues: string[],
    setSelectedValues: React.Dispatch<React.SetStateAction<string[]>>
) => {
    const value = event.target.value;
    setSelectedValues(prevSelected =>
        event.target.checked
            ? [...prevSelected, value]
            : prevSelected.filter(item => item !== value)
    );
};
  

  

  
const applyFilters = () => {
  // Create a new FilterParams object including the selected towns and car statuses
  const newFilters: FilterParams = {
      ...localFilters,
      town: selectedTowns,
      carStatus: selectedCarStatuses,
      // include other filters...
  };

  props.onApplyFilters(newFilters);
};


  const createSelectOptions = (start: number, end: number, step: number, unit: string = '') => {
    const options = [];
    for (let i = start; i <= end; i += step) {
      options.push(
        <option key={i} value={i}>
          {`${i.toLocaleString()} ${unit}`.trim()}
        </option>
      );
    }
    return options;
  };
  
    return (

      <div className="car-filter-container">
        <h3 className="filter-title">Search our cars</h3>      

        <div className="filter-section">
          <label className="filter-label">Brand:</label>
            <Select
                    isMulti
                    name="make"
                    options={brandOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(selectedOptions) => handleSelectChange(selectedOptions, 'make')}
                    value={brandOptions.filter(option => localFilters.make.includes(option.value))}
                    placeholder="Select Car Brands"
                  />
        </div>

        <div className="filter-section">
          <label className="filter-label">Body type:</label>
              {/* Body Style Multi-Select */}
                    <Select
                      isMulti
                      name="bodyStyle"
                      options={bodyStyleOptions}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={(selectedOptions) => handleSelectChange(selectedOptions, 'bodyStyle')}
                      value={bodyStyleOptions.filter(option => localFilters.bodyStyle.includes(option.value))}
                      placeholder="Select Body Styles"
                    />
        </div>

        <div className="filter-section">
          <label className="filter-label">Price (EUR):</label>
          {/* Dropdown for Price Range */}
                <div className="price-range">
                  <select name="minPrice" value={localFilters.minPrice || ''} onChange={handleChange}>
                    <option value="">From</option>
                    {createSelectOptions(500, 300000, 500)}
                  </select>
                  <select name="maxPrice" value={localFilters.maxPrice || ''} onChange={handleChange}>
                    <option value="">To</option>
                    {createSelectOptions(500, 300000, 500, '€')}
                  </select>
                </div>
        </div>

        <div className="filter-section">
          <label className="filter-label">Mileage:</label>
          {/* Dropdown for Mileage Range */}
                <div className="mileage-range">
                  <select name="minMileage" value={localFilters.minMileage || ''} onChange={handleChange}>
                    <option value="">Min</option>
                    {createSelectOptions(0, 300000, 10000, 'KM')}
                  </select>
                  <select name="maxMileage" value={localFilters.maxMileage || ''} onChange={handleChange}>
                    <option value="">Max</option>
                    {createSelectOptions(10000, 300000, 10000, 'KM')}
                  </select>
                </div>
        </div>

        <div className="filter-section">
          <label className="filter-label">Year:</label>
        {/* Dropdown for Year Range */}
              <div className="year-range">
                <select name="minYear" value={localFilters.minYear || ''} onChange={handleChange}>
                  <option value="">From</option>
                  {createSelectOptions(1990, new Date().getFullYear(), 1)}
                </select>
                <select name="maxYear" value={localFilters.maxYear || ''} onChange={handleChange}>
                  <option value="">To</option>
                  {createSelectOptions(1990, new Date().getFullYear(), 1)}
                </select>
              </div>
        </div>

        <div className="filter-section">
          <label className="filter-label">Fuel type:</label>
        {/* Fuel Multi-Select */}
              <Select
                isMulti
                name="fuel"
                options={fuelOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(selectedOptions) => handleSelectChange(selectedOptions, 'fuel')}
                value={fuelOptions.filter(option => localFilters.fuel.includes(option.value))}
                placeholder="Select Fuel Type"
              />


        </div>

        <div className="filter-section">
          <label className="filter-label">Transmission:</label>
            {/* Transmission Multi-Select */}
                  <Select
                    isMulti
                    name="transmission"
                    options={transmissionOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(selectedOptions) => handleSelectChange(selectedOptions, 'transmission')}
                    value={transmissionOptions.filter(option => localFilters.transmission.includes(option.value))}
                    placeholder="Select Transmission Type"
                  />
        </div>
        
        <div className="filter-section">
          <label className="filter-label">Location:</label>
  {/* Town Checkboxes */}
                <div className="checkbox-group">
                  {towns.map((town, index) => (
                      <label key={index}>
                          <input
                              type="checkbox"
                              value={town}
                              checked={selectedTowns.includes(town)}
                              onChange={(e) => handleCheckboxChange(e, selectedTowns, setSelectedTowns)}
                          />
                          {town}
                      </label>
                  ))}
              </div>

        </div>

        <div className="filter-section">
          <label className="filter-label">Car status:</label>
          {/* Car Status Checkboxes */}
                      <div className="checkbox-group">
                          {carStatuses.map((status, index) => (
                              <label key={index}>
                                  <input
                                      type="checkbox"
                                      value={status}
                                      checked={selectedCarStatuses.includes(status)}
                                      onChange={(e) => handleCheckboxChange(e, selectedCarStatuses, setSelectedCarStatuses)}
                                  />
                                  {status}
                              </label>
                          ))}
                      </div>
        </div>

        <div className="filter-section">
    <button className="apply-button" onClick={applyFilters}>Apply Filters</button>
</div>



      </div>




    );
  };

export default CarFilter;