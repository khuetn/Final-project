import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import anh1 from "../../assets/images/baner/anh1.jpg";
import anh2 from "../../assets/images/baner/anh2.jpg";

import "./style.scss";

//----------------------------------------------------------------

//----------------------------------------------------------------

export default function Banner() {
  const dataBannerResult = [
    {
      banner: anh1,
    },
    {
      banner: anh2,
    },
  ];

  const settings = {
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 550,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const ShowBanner = (data) => {
    if (data.length > 0) {
      return (
        <Slider {...settings} className="list-item-banner">
          {data.map((igBanner, index) => (
            <div className="items-banner" key={index}>
              <img src={igBanner.banner} alt={igBanner._id} />
            </div>
          ))}
        </Slider>
      );
    }
  };
  return (
    <>
      <div className="ground-banner">
        <div className="list-banner">
          <div className="list-banner__left">
            {ShowBanner(dataBannerResult)}
          </div>
          <div className="list-banner__right">
            <h1>Class</h1>
            <h2>White</h2>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
    </>
  );
}
