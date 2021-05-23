import React from "react";
import blackstarIcon from "../../assets/images/star-solid.svg";
import starIcon from "../../assets/images/star-regular.svg";

import "./RatingStar.scss";
function RatingStar(props) {
  const [imgSrc, setImgSrc] = React.useState(blackstarIcon);
  console.log(imgSrc);
  const countStar = 3;
  function changeIconStar(element) {}
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
                  console.log("ok");
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