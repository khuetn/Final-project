import React from "react";

import "./Comment.scss";
import Formwrite from "./Formwrite/Formwrite";
import Listcomment from "./Listcomment/Listcomment";

function Comment(props) {
  return (
    <div className="row container comment">
      <div className="comment__user">user</div>
      <div className="comment__list">user</div>
    </div>
  );
}

export default Comment;
