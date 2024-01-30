import React, { useState, useEffect, useRef } from 'react';
import './Slideshow.css';
import { BASE_URL } from '../../constants'; 

const delay = 4500;

type Props = {
  images: string[]; // Accepts an array of image URLs
};

function Slideshow({ images }: Props) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(1);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  


  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, images.length]);



  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((imageFilename, idx) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundImage: `url(${BASE_URL}/images/${imageFilename})` }}  
          >
          </div>
        ))}
      </div>

      <div className="slideshowDots">
      {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
