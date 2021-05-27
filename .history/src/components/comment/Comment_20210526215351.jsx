import React from "react";

import "./Comment.scss";
import Formwrite from "./Formwrite/Formwrite";
import Listcomment from "./Listcomment/Listcomment";
import FirebaseContext from "../../firebase/context";

function Comment(props) {
  const { firebase, user } = React.useContext(FirebaseContext);

  return (
    <div className="container comment">
      {user && (
        <>
          <div className="comment__user">
            <div className="user__profile">
              <div className="user__img">user icon</div>
              <div className="user__name">user name</div>
            </div>
            <div className="user__vote">vote</div>
          </div>
        </>
      )}
      <div className="comment__list">user</div>
    </div>
  );
}

export default Comment;
