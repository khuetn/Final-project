import React from "react";
import blackstarIcon from "../../assets/images/star-solid.svg";
import starIcon from "../../assets/images/star-regular.svg";

import "./RatingStar.scss";
function RatingStar(props) {
  let countStar = 5;
  const [starReview, setStarReview] = React.useState(countStar);

  const initialStarbegin = [...Array(5)].map((x, index) => {
    if (index < starReview) {
      return blackstarIcon;
    } else {
      return starIcon;
    }
  });

  const [initialStar, setInitialStar] = React.useState(initialStarbegin);
  const [imgSrc, setImgSrc] = React.useState(initialStar);

  function changeInitialStar(newCountStar) {
    console.log("new", newCountStar);
    const initialStarbegin = [...Array(5)].map((x, index) => {
      if (index < newCountStar) {
        return blackstarIcon;
      } else {
        return starIcon;
      }
    });
    setInitialStar(initialStarbegin);
    setImgSrc(initialStar);
  }

  // function changeIconStar(index) {
  //   changeInitialStar(starReview);
  //   let newState = initialStar;
  //   if (imgSrc[index] == blackstarIcon) {
  //     newState[index] = starIcon;
  //   } else {
  //     newState[index] = blackstarIcon;
  //   }
  //   setImgSrc(newState);
  // }

  return (
    <div class="rating-star">
      {imgSrc.map((star, index) => {
        const starIndex = index;
        return (
          <span>
            <img
              src={star}
              onMouseOver={() => {
                // changeIconStar(starIndex);
              }}
              onClick={() => {
                console.log(starIndex);
                const abcd = starIndex + 1;
                setStarReview(abcd);
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
