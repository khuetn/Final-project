import React from "react";
import blackstarIcon from "../../assets/images/star-solid.svg";
import starIcon from "../../assets/images/star-regular.svg";

import "./RatingStar.scss";
function RatingStar(props) {
  let countStar = 5;

  const initialStar = [...Array(5)].map((x, index) => {
    if (index < countStar) {
      return blackstarIcon;
    } else {
      return starIcon;
    }
  });

  const [imgSrc, setImgSrc] = React.useState(initialStar);

  function changeInitialStar(newCountStar) {
    console.log("new", newCountStar);
    const initialStar = [...Array(5)].map((x, index) => {
      if (index < newCountStar) {
        return blackstarIcon;
      } else {
        return starIcon;
      }
    });

    setImgSrc(initialStar);
    console.log(imgSrc);
  }

  function changeIconStar(index) {
    let newState = imgSrc;
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
                console.log(starIndex);
                const abcd = starIndex + 1;
                changeInitialStar(abcd);
              }}
            />
          </span>
        );
      })}
    </div>
  );
}

export default RatingStar;
