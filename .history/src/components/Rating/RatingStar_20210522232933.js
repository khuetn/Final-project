import React from "react";
import blackstarIcon from "../../assets/images/star-solid.svg";
import starIcon from "../../assets/images/star-regular.svg";

import "./RatingStar.scss";
function RatingStar(props) {
  let countStar = props.rating;
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

  function changeStar(starIndex, checkEvent) {
    let clickStar = [];
    let hoverStar = [];
    if (checkEvent == "onClick") {
      clickStar = createInitStar(starIndex + 1);
      setInitialStar(clickStar);
      setImgSrc(clickStar);
    } else if (checkEvent == "onMouseOver") {
      hoverStar = [...initialStar];
      console.log(hoverStar);
      if (initialStar[starIndex] == blackstarIcon) {
        hoverStar[starIndex] = starIcon;
      } else {
        hoverStar[starIndex] = blackstarIcon;
      }
      setImgSrc(hoverStar);
    } else {
      hoverStar = [...initialStar];
      setImgSrc(hoverStar);
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
                changeStar(starIndex, "onMouseOver");
              }}
              onMouseOut={() => {
                console.log(initialStar);
                changeStar(starIndex, "onMouseOut");
              }}
              onClick={() => {
                changeStar(starIndex, "onClick");
              }}
            />
          </span>
        );
      })}
    </div>
  );
}

export default RatingStar;
