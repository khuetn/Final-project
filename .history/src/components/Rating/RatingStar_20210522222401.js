import React from "react";
import blackstarIcon from "../../assets/images/star-solid.svg";
import starIcon from "../../assets/images/star-regular.svg";

import "./RatingStar.scss";
function RatingStar(props) {
  let countStar = 4;
  function createInitStar(countStar) {
    const init = [...Array(5)].map((x, index) => {
      if (index < countStar) {
        return blackstarIcon;
      } else {
        return starIcon;
      }
    });
    return init;
  }
  const initialStarbegin = init(countStar);

  const [initialStar, setInitialStar] = React.useState(initialStarbegin);
  const [imgSrc, setImgSrc] = React.useState(initialStar);

  function changeInitStar(starIndex) {
    const newInit = createInitStar(starIndex);
    setInitialStar(newInit);
  }
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
