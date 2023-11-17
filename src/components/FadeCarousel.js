import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
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
    link: "/book/6",
  },
];

const FadeCarousel = () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[EffectFade, Pagination, Navigation, Autoplay]}
        effect={"fade"}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
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
        className="swiper_container"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Link to={slide.link}>
              <img src={slide.image} />
            </Link>
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

export default FadeCarousel;
