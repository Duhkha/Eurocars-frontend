export type Car = {
    id: string;
    make: string; // should change to make
    model: string;
    mileage: number;
    year: number;
    priceWithTax: number; // Keeping both prices for clarity
    priceWithoutTax: number;
    motor: string;
    motorCapacity: string;
    fuel: string;
    motorStrength: string;
    emissionStandard: string;
    drivetrain: string;
    countryOfOrigin: string;
    transmission: string;
    bodyStyle: string;
    carColor: string;
    numCarDoors: string;
    numCarSeats: string;
    fuelEconomy: string;
    registration: string;
    shortNote: string;
    longNote: string;
    imageUrls: string[];
    equipment: string[];
    creationDate: Date;
    town: string;
    firstImageUrl: string;
};

export type AddCars = {
  make: string; // should change to make
  model: string;
  mileage: number;
  year: number;
  priceWithTax: number; // Keeping both prices for clarity
  priceWithoutTax: number;
  motor: string;
  motorCapacity: string;
  fuel: string;
  motorStrength: string;
  emissionStandard: string;
  drivetrain: string;
  countryOfOrigin: string;
  transmission: string;
  bodyStyle: string;
  carColor: string;
  numCarDoors: string;
  numCarSeats: string;
  fuelEconomy: string;
  registration: string;
  shortNote: string;
  longNote: string;
  equipment: string[];
  town: string;
};

export type PaginatedResponse<T> = {
    content: T[];
    totalElements: number;
    totalPages: number;
    last: boolean;
    size: number;
    number: number; // Current page index
    sort: any;
    first: boolean;
    numberOfElements: number;
  };

  export type FilterParams = {
    sortBy: string;
    sortOrder: string;
    make: string[];
    minYear?: number;
    maxYear?: number;
    minPrice?:number;
    maxPrice?:number;
    minMileage?:number;
    maxMileage?:number;
    bodyStyle:string[];
    transmission:string[];
    fuel:string[];
    town:string[];
    carStatus:string[];

    // ... other filter fields
  };


  export type MainCars = {
    carStatus: string;
    id: string;
    make: string;
    model: string;
    mileage: number;
    year: number;
    priceWithTax: number;
    firstImageUrl: string;
  }
  
  export type MainPage = {
    slideshowImages: string[];
    upcomingCars: MainCars[];
    newArrivals: MainCars[];
    note?: string; 
  }
  
