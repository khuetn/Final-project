import React from "react";
import blackstarIcon from "../../assets/images/star-solid.svg";
import starIcon from "../../assets/images/star-regular.svg";

import "./RatingStar.scss";
function RatingStar(props) {
  const [imgSrc, setImgSrc] = React.useState(blackstarIcon);
  const countStar = 3;
  function changeIconStar(element) {
    if (imgSrc == blackstarIcon) {
      setImgSrc(starIcon);
    }
    element.src = imgSrc;
    setImgSrc(blackstarIcon);
  }
  return (
    <div class="rating-star">
      {[...Array(5)].map((x, index) => {
        if (index < countStar) {
          return (
            <span>
              <img
                key={index}
                className="blackStar"
                src={imgSrc}
                alt="star-icon"
                onMouseOver={(e) => {
                  changeIconStar(e.target);
                }}
              />
            </span>
          );
        } else {
          return (
            <span>
              <img src={starIcon} alt="star-icon" />
            </span>
          );
        }
      })}
    </div>
  );
}

export default RatingStar;