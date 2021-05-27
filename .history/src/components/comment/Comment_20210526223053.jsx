import React from "react";

import "./Comment.scss";
// import Formwrite from "./Formwrite/Formwrite";
import Listcomment from "./Listcomment/Listcomment";
import FirebaseContext from "../../firebase/context";
import { FaUserCircle } from "react-icons/fa";
function Comment(props) {
  const { firebase, user } = React.useContext(FirebaseContext);

  return (
    <div className="container comment">
      <div className="comment__title">Join the discussion</div>
      {user && (
        <div className="comment__container">
          <div className="comment__user">
            <div className="user__profile">
              {/* <div className="user__img">
                <FaUserCircle />
              </div> */}
              <div className="user__name">{user.displayName}</div>
            </div>
            {/* <div className="user__vote">vote</div> */}
            <form className="user__comment">
              <textarea
                className="user__text"
                col="160"
                row="10"
                placeholder="comment"
              />
              <button className="user__post">Add comment</button>
            </form>
          </div>
        </div>
      )}
      <div className="comment__list"></div>
    </div>
  );
}

export default Comment;
