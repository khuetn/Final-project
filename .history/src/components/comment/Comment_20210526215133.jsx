import React from "react";

import "./Comment.scss";
import Formwrite from "./Formwrite/Formwrite";
import Listcomment from "./Listcomment/Listcomment";
import FirebaseContext from "../../firebase/context";

function Comment(props) {
  return (
    <div className="container comment">
      <div className="comment__user">
        <div className="user__profile"></div>
      </div>
      <div className="comment__list">user</div>
    </div>
  );
}

export default Comment;
