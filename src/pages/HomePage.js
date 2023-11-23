import React from "react";
import SwiperCarousel from "../components/SwiperCarousel";
import FadeCarousel from "../components/FadeCarousel";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">WELCOME TO THE CAPTIVATING WORLD OF ALYSSA POTTER!</h1>
      </div>

      <div className="fade-carousel">
        <FadeCarousel />
      </div>

      <div className="slider-carousel">
        <SwiperCarousel />
      </div>
    </div>
  );
};

export default HomePage;
