import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarCardCarousel from '../CarCardCarousel';
import { MainCars } from '../../utils/types';
import { carList } from '../../constants';
import './Carousel.css'; 

type Props = {
  cars: MainCars[]; 
};

function Carousel({ cars }: Props) {
  

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Adjust the number of cars to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Show arrows for navigation
    dots: false, // Hide dots
  };

  return (
    <Slider {...settings}>
      {cars.map((car, i) => (
        <div key={i}>
          <CarCardCarousel car={car} />
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
