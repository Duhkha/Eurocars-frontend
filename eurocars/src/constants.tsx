import {Car} from "./utils/types"

export const carList: Car[] = [
    {
        id: '1',
        brand: 'BMW',
        model: '335i',
        milage: 20000,
        year: 2012,
        price: 23432,
        img: '/img/bmw1.jpg'
    },
    {
        id: '2',
        brand: 'Mercedes-Benz',
        model: 'SLK320',
        milage: 20000,
        year: 2009,
        price: 23432,
        img: '/img/mercedes2.jpg'
    },
    {
        id:'3',
        make: 'Audi',
        model: 'TT',
        mileage: 20000,
        year: 2007,
        priceWithTax: 23432,
        img: '/img/audi3.jpg'
    },
    {
        id:'4',
        make: 'Porsche',
        model: '911 Carrera 992 Coupe',
        mileage: 20000,
        year: 2007,
        priceWithTax: 23432,
        imageUrls: '/img/porsche.jpg'
    },
    {
        id:'5',
        make: 'Audi',
        model: 'A6',
        mileage: 20000,
        year: 2007,
        priceWithTax: 23432,
        imageUrls: '/img/audia6.jpg'
    }


]

export const BASE_URL = 'http://172.20.10.8:8080/api'

export const carBrands = ['BMW', 'Audi', 'Mercedes', 'Toyota', 'Honda'];
export const bodyStyle=['Coupe','Sedan','SUV','Convertible'];
export const fuels=['Diesel','Gasoline','Hybrid','Electric'];
export const transmissions=['Automatic','Manual']
export const towns=['Sarajevo','Cazin']
export const carStatuses=['AVAILABLE','SOLD','COMING','SALE']