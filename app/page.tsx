'use client'

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header/header"
import image  from './images/image.jpg'
import image1  from './images/image1.jpg'
import image2  from './images/image2.jpg'
import image3 from './images/image3.webp'
import Image from "next/image";

import './globals.css'

// ...

export default function Home() {
  const Images = [image, image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
    };

    const interval = setInterval(slideNext, 3000);

    return () => clearInterval(interval);
  }, [Images.length]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (

  
    
    <div>
      <div>
      <Header/>
      </div>
      
      <Slider {...settings}>
        {Images.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`Slider Image ${index + 1}`}
              
              width={1920}
              height={400}
            />
          </div>
        ))}
      </Slider>

      <h1>Welcome To Liwonde Private Hospital</h1>
      <h3>A Great Place To Recieve Care </h3>

      <section className="section">
      <div className="box-container">

          <div className="flex-box">
            Box 1

          </div>
          <div className="flex-box">
            Box 2

          </div>
          <div className="flex-box">
            Box 3

          </div>
          <div className="flex-box">
            Box 4

          </div>


     </div>
     <div className="box-container">

          <div className="flex-box">
            Box 5

          </div>
          <div className="flex-box">
            Box 6

          </div>
          <div className="flex-box">
            Box 7

          </div>
          <div className="flex-box">
            Box 8

          </div>


     </div>
        
      </section>
      
    </div>
  );
}
