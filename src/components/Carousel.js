import { Carousel } from "react-carousel-minimal";
// images
import youreTheOne from "../content/images/books/Youre-The-One.png";
import * as content from "../content/content.js";

const CarouselGallery = () => {
  const data = [
    {
      image: content.bestThing,
      caption: "The Best Thing",
    },
    {
      image: youreTheOne,
      caption: "You're The One",
    },
    {
      image: content.everyLittleThing,
      caption: "Every Little Thing",
    },
    {
      image: content.ghostOfYou,
      caption: "Ghost of You",
    },
    {
      image: content.loseYou,
      caption: "Lose You",
    },
    {
      image: content.secondChances,
      caption: "Second Chances",
    },
    {
      image: content.truthOrDare,
      caption: "Truth or Dare",
    },
  ];

  return (
    <div className="carousel">
      <Carousel
        data={data}
        time={5000}
        width="850px"
        height="600px"
        radius="10px"
        slideNumber={false}
        captionStyle={{ color: "transparent" }}
        captionPosition="top"
        automatic={true}
        dots={false}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="transparent"
        slideImageFit="contain"
        thumbnails={false}
        thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "850px",
          maxHeight: "500px",
          margin: "40px auto",
        }}
      />
    </div>
  );
};

export default CarouselGallery;
