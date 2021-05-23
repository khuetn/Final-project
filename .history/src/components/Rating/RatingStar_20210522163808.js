import React from "react";
import blackstarIcon from "../../assets/images/star-solid.svg";
import starIcon from "../../assets/images/star-regular.svg";

import "./RatingStar.scss";
function RatingStar(props) {
  const countStar = 3;
  function changeIconStar(element) {
    console.log(element);
  }
  return (
    <div class="rating-star">
      {[...Array(5)].map((x, index) => {
        if (index < countStar) {
          return (
            <span>
              <img
                src={blackstarIcon}
                alt="star-icon"
                onClick={(e) => {
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
