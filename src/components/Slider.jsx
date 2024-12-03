import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "../assets/13-700x600.jpg";

const Slider = () => {
  return (
    <Carousel autoPlay showThumbs={false} infiniteLoop showArrows>
      <div>
        <img src={slide1} alt="Slide 1" />
      </div>
      <div>
        <img src={slide1} alt="Slide 2" />
      </div>
      <div>
        <img src={slide1} alt="Slide 3" />
      </div>
    </Carousel>
  );
};

export default Slider;
