import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import "../../vendors/fontawesome/css/fontawesome.min.css"
import { useSelector } from "react-redux";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fa fa-angle-left" style={{ color: "#1d2834" }}></i>
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fa fa-angle-right" style={{ color: "#1d2834" }}></i>
    </div>
  );
};
const Carousel = () => {
  const login = useSelector((state) => state.LogIn);
  return (
    <>
    {login.logedIn ? (
      <Slider
        autoplay={true}
        autoplaySpeed={3000}
        dots={true}
        fade={true}
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
      >
        <div>
          <img
              src="https://wallpaperaccess.com/full/767255.jpg"
              style={{ width: "100%", height: "90vh" }}
              alt="Profile Banners"
          />

        </div>

        <div>
          <img
              src="https://wallpapershome.com/images/wallpapers/food-2560x1440-cooking-grill-vegetables-peppers-mushrooms-tomatoes-403.jpg"
              style={{ width: "100%", height: "90vh" }}
              alt="Profile Banners"
          />
        </div>

        <div>
          <img
              src="https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1200&format=pjpg&exif=1&iptc=1"
              style={{ width: "100%", height: "90vh" }}
              alt="Profile Banners"
          />
        </div>
      </Slider>

    ) :(
      <Slider
        autoplay={true}
        autoplaySpeed={3000}
        dots={true}
        fade={true}
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
      >
        <div>
          <img
              src="https://wallpaperaccess.com/full/767255.jpg"
              style={{ width: "100%", height: "90vh" }}
              alt="Profile Banners"
          />

        </div>

        <div>
          <img
              src="https://wallpapershome.com/images/wallpapers/food-2560x1440-cooking-grill-vegetables-peppers-mushrooms-tomatoes-403.jpg"
              style={{ width: "100%", height: "90vh" }}
              alt="Profile Banners"
          />
        </div>

        <div>
          <img
              src="https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1200&format=pjpg&exif=1&iptc=1"
              style={{ width: "100%", height: "90vh" }}
              alt="Profile Banners"
          />
        </div>
      </Slider>
    )}
    </>
  );
};
export default Carousel;
