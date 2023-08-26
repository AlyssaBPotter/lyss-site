import React from 'react'
import CarouselGallery from '../components/Carousel'


const HomePage = () => {


  return (
    <div className='home-container'>     

      <div className='home-header'>
        <h1 className='home-title'>WELCOME TO THE CAPTIVATING WORLD OF ALYSSA POTTER!</h1>
      </div>      

      <div className='home-carousel'>
        <div className='carousel-container'>
          <CarouselGallery/>
        </div>
      </div>
    </div>
  );
}

export default HomePage

