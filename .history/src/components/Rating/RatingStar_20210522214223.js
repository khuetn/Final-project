import React from "react";
import blackstarIcon from "../../assets/images/star-solid.svg";
import starIcon from "../../assets/images/star-regular.svg";

import "./RatingStar.scss";
function RatingStar(props) {
  let countStar = 5;

  const initialStarbegin = [...Array(5)].map((x, index) => {
    if (index < countStar) {
      return blackstarIcon;
    } else {
      return starIcon;
    }
  });

  const [initialStar, setInitialStar] = React.useState(initialStarbegin);
  return (
    <div class="rating-star">
      {imgSrc.map((star, index) => {
        const starIndex = index;
        return (
          <span>
            <img src={star} onMouseOver={() => {}} onClick={() => {}} />
          </span>
        );
      })}
    </div>
  );
}

export default RatingStar;