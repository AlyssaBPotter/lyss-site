import React from 'react'
import CarouselGallery from '../components/Carousel'


const HomePage = () => {


  return (
    <div className='home-container'>     

      <div className='home-header'>
        <label>HOME Page</label>
      </div>      

      <div className='carousel-container'>
        <CarouselGallery/>
      </div>

    </div>
  );
}

export default HomePage

