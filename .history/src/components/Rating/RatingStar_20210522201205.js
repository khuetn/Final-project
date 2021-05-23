import React from "react";
import blackstarIcon from "../../assets/images/star-solid.svg";
import starIcon from "../../assets/images/star-regular.svg";

import "./RatingStar.scss";
function RatingStar(props) {
  const myImg = require("../../assets/images/star-solid.svg");
  const countStar = 3;
  const initialStar = [...Array(5)].map((x, index) => {
    if (index < countStar) {
      return blackstarIcon;
    } else {
      return starIcon;
    }
  });
  const [imgSrc, setImgSrc] = React.useState(initialStar);
  function changeIconStar(index) {
    console.log(imgSrc);
    let newState = imgSrc;
    console.log(newState);
    console.log(index);
    if (imgSrc[index] == blackstarIcon) {
      newState[index] = starIcon;
    } else {
      newState[index] = blackstarIcon;
    }
    setImgSrc(newState);
  }
  return (
    <div class="rating-star">
      {imgSrc.map((star, index) => {
        return (
          <span>
            <img
              src={star}
              onMouseOver={() => {
                changeIconStar(3);
              }}
            />
          </span>
        );
      })}
    </div>
  );
}

export default RatingStar;
