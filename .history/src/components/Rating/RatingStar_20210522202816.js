import React from "react";
import blackstarIcon from "../../assets/images/star-solid.svg";
import starIcon from "../../assets/images/star-regular.svg";

import "./RatingStar.scss";
function RatingStar(props) {
  const countStar = 3;

  const [starReview, setStarReview] = React.useState(countStar);
  const myImg = require("../../assets/images/star-solid.svg");
  const initialStar = [...Array(5)].map((x, index) => {
    if (index < starReview) {
      return blackstarIcon;
    } else {
      return starIcon;
    }
  });
  const [imgSrc, setImgSrc] = React.useState(initialStar);

  function changeIconStar(index) {
    let newState = initialStar;
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
        const starIndex = index;
        return (
          <span>
            <img
              src={star}
              onMouseOver={() => {
                changeIconStar(starIndex);
              }}
              onClick={() => {
                setStarReview(starIndex);
              }}
            />
          </span>
        );
      })}
    </div>
  );
}

export default RatingStar;
