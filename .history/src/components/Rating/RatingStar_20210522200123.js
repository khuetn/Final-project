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
  function changeIconStar(element) {
    // if (imgSrc == blackstarIcon) {
    //   setImgSrc(starIcon);
    // } else {
    //   setImgSrc(blackstarIcon);
    // }
  }
  return (
    <div class="rating-star">
      {imgSrc.map((star, index) => {
        return (
          <span>
            <img src={star} />
          </span>
        );
      })}
    </div>
  );
}

export default RatingStar;
