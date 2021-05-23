import React from "react";
import blackstarIcon from "../../assets/images/star-solid.svg";
import starIcon from "../../assets/images/star-regular.svg";

import "./RatingStar.scss";
function RatingStar(props) {
  const myImg = require("../../assets/images/star-solid.svg");
  const countStar = 4;
  const initialStar = [...Array(5)].map((x, index) => {
    if (index < countStar) {
      return blackstarIcon;
    } else {
      return starIcon;
    }
  });
  const [imgSrc, setImgSrc] = React.useState(initialStar);
  function changeIconStar(index) {
    let newState = initialStar;
    console.log(newState);
    console.log(index);
    if (imgSrc[index] == blackstarIcon) {
      newState[index] = starIcon;
    } else {
      newState[index] = blackstarIcon;
    }
    console.log(newState);
    setImgSrc(newState);
  }
  return (
    <div class="rating-star">
      {imgSrc.map((star, index) => {
        const starIndex = index;
        return (
          <span>
            <img
              src={star}
              onClick={() => {
                changeIconStar(starIndex);
              }}
            />
          </span>
        );
      })}
    </div>
  );
}

export default RatingStar;
