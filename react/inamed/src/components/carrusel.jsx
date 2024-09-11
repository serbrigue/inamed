import React, { useState } from 'react';
import med1 from '../assets/med1.jpg';
import med2 from '../assets/med5.jpg';
import med3 from '../assets/med3.jpg';
import med4 from '../assets/med4.jpg';


const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
      { src: med1, alt: 'slide 1' },
      { src: med2, alt: 'slide 2' },
      { src: med3, alt: 'slide 3' },
      { src: med4, alt: 'slide 4' },
    ];
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="relative w-full  justify-center items-center p-4">
        <div className="carousel w-full max-w-4xl mx-auto">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentIndex ? 'block' : 'hidden'}`}
            >
              <img src={slide.src} alt={slide.alt} className="w-auto  object-cover p-4" />
            </div>
          ))}
        </div>
        {/* Navigation buttons */}
        <div className="absolute inset-0 flex justify-between items-center w-full max-w-4xl mx-auto">
          <button onClick={prevSlide} className="prev  text-2xl">&#10094;</button>
          <button onClick={nextSlide} className="next  text-2xl">&#10095;</button>
        </div>
        {/* Dots */}
        <div className="flex justify-center mt-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 mx-1 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
            ></button>
          ))}
        </div>
      </div>
    );
  };
  
  export default Carousel;