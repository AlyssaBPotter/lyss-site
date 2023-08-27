import { Carousel } from 'react-carousel-minimal'; 

const CarouselGallery = () => {
 const data = [
    {
      image: "./assets/books/best-thing/Best-Thing.png",
      caption: "The Best Thing"
    },
    {
      image: "./books/every-little-thing/Every-Little-Thing.png",
      caption: "Every Little Thing"
    },
    {
      image: "./books/ghost-of-you/Ghost-Of-You.png",
      caption: "Ghost of You"
    },
    {
      image: "./books/lose-you/Lose-You.png",
      caption: "Lose You"
    },
    {
      image: "./books/second-chances/Second-Chances.png",
      caption: "Second Chances"
    },
    {
      image: "./books/truth-or-dare/Truth-Or-Dare.png",
      caption: "Truth or Dare"
    },

  ];

  const captionStyle = {
    fontSize: '0'
    
  }

  return (
    <div className="carousel">
          <Carousel
            data={data}
            time={5000}
            width="850px"
            height="600px"
            radius="10px"
            slideNumber={false}
            captionStyle={captionStyle}
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
}

export default CarouselGallery;

