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
  const [imgSrc, setImgSrc] = React.useState(initialStar);

  function changeInitialStar(newCountStar) {
    const newInit = [...Array(5)].map((x, index) => {
      if (index < newCountStar) {
        return blackstarIcon;
      } else {
        return starIcon;
      }
    });
    setInitialStar(newInit);
    setImgSrc(newInit);
  }
  function changeHoverStar(initStar, starIndex) {
    const hoverStar = initStar;
    if (imgSrc[starIndex - 1] == blackstarIcon) {
      hoverStar[starIndex - 1] = starIcon;
    } else {
      hoverStar[starIndex - 1] = blackstarIcon;
    }
    setImgSrc(hoverStar);
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
                changeHoverStar(initialStar, starIndex + 1);
              }}
              onClick={() => {
                changeInitialStar(starIndex + 1);
              }}
            />
          </span>
        );
      })}
    </div>
  );
}

export default RatingStar;
