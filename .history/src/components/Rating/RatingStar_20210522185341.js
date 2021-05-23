import React from "react";
import blackstarIcon from "../../assets/images/star-solid.svg";
import starIcon from "../../assets/images/star-regular.svg";

import "./RatingStar.scss";
function RatingStar(props) {
  const countStar = 3;
  function changeIconStar(element) {
    console.log(element.className);
    console.log(element.src);
    element.src =
      "http://localhost:3000/static/media/star-regular.3f5eb997.svg";
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
                src={blackstarIcon}
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
