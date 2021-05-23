import React from "react";
import blackstarIcon from "../../assets/images/star-solid.svg";
import starIcon from "../../assets/images/star-regular.svg";

import "./RatingStar.scss";
function RatingStar(props) {
  let countStar = 2;
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
  const initialStarbegin = createInitStar(countStar);

  const [initialStar, setInitialStar] = React.useState(initialStarbegin);
  const [imgSrc, setImgSrc] = React.useState(initialStar);

  function changeStar(starIndex, checkHover, currentImgSrc) {
    let newStar = [];
    if (!checkHover) {
      newStar = createInitStar(starIndex);
      setImgSrc(newStar);
    } else {
    }
  }
  function changeHoverStar() {}
  return (
    <div class="rating-star">
      {imgSrc.map((star, index) => {
        const starIndex = index;
        return (
          <span>
            <img
              src={star}
              onMouseOver={() => {}}
              onClick={() => {
                changeStar(starIndex + 1, false, imgSrc);
              }}
            />
          </span>
        );
      })}
    </div>
  );
}

export default RatingStar;