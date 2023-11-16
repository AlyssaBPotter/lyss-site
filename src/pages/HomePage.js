import React from "react";
import CarouselGallery from "../components/Carousel";
import SwiperCarousel from "../components/SwiperCarousel";
import BasicCarousel from "../components/SwiperCarousel";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">WELCOME TO THE CAPTIVATING WORLD OF ALYSSA POTTER!</h1>
      </div>

      <div className="home-carousel">
        <SwiperCarousel />
      </div>

      <div>
        <CarouselGallery />
      </div>

      <div>
        <BasicCarousel />
      </div>
    </div>
  );
};

export default HomePage;
