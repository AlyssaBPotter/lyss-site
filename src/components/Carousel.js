import { Carousel } from 'react-carousel-minimal'; 

const CarouselGallery = () => {
 const data = [
    {
      image: "/books/best-thing/Best-Thing.png",
      caption: "San Francisco"
    },
    {
      image: "/books/every-little-thing/Every-Little-Thing.png",
      caption: "Scotland"
    },
    {
      image: "/books/ghost-of-you/Ghost-of-You.png",
      caption: "Darjeeling"
    },
    {
      image: "/books/lose-you/Lose-You.png",
      caption: "San Francisco"
    },
    {
      image: "/books/second-chances/Second-Chances.png",
      caption: "Scotland"
    },
    {
      image: "/books/truth-or-dare/Truth-or-Dare.png",
      caption: "Darjeeling"
    },

  ];

  return (
    <div className="carousel">
          <Carousel
            data={data}
            time={6000}
            width="850px"
            height="600px"
            radius="10px"
            slideNumber={false}
            captionPosition="bottom"
            automatic={true}
            dots={true}
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
}

export default CarouselGallery;

