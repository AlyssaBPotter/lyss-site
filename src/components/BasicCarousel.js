import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";
import * as content from "../content/content.js";

const slidesData = [
  {
    id: 1,
    image: content.availableWattpadSlide,
    caption: "Available on Wattpad",
  },
  {
    id: 2,
    image: content.truthOrDareSlide,
    caption: "Truth or Dare",
  },
];

const BasicCarousel = () => {
  return (
    <div className="swiper-container">
      <Swiper
        effect={"fade"}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        // fadeEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectFade, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} />
          </SwiperSlide>
        ))}
        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default BasicCarousel;
