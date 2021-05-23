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

  function changeStar(starIndex, checkHover) {
    console.log(starIndex);
    let newStar = [];
    if (!checkHover) {
      newStar = createInitStar(starIndex);
      setInitialStar(newStar);
      setImgSrc(newStar);
    } else {
      newStar = initialStar;
      // console.log(initialStar);
      if (initialStar[starIndex - 1] == blackstarIcon) {
        newStar[starIndex - 1] = starIcon;
      } else {
        newStar[starIndex - 1] = blackstarIcon;
      }
      setImgSrc(newStar);
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
              onMouseOver={() => {
                console.log(initialStar);
                changeStar(starIndex + 1, true);
              }}
              onClick={() => {
                changeStar(starIndex + 1, false);
              }}
            />
          </span>
        );
      })}
    </div>
  );
}

export default RatingStar;
