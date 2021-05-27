import React from "react";

import "./Comment.scss";
// import Formwrite from "./Formwrite/Formwrite";
import Listcomment from "./Listcomment/Listcomment";
import FirebaseContext from "../../firebase/context";
import { FaUserCircle } from "react-icons/fa";
import { NavLink, useHistory } from "react-router-dom";

function Comment(props) {
  const { firebase, user } = React.useContext(FirebaseContext);
  const [showListComment, setShowListComment] = React.useState("false");
  return (
    <div className="container comment">
      <div className="comment__title">
        {user ? (
          <>Join the discussion</>
        ) : (
          <>
            <NavLink to={ROUTES.LOGIN}>Login to comment</NavLink>
          </>
        )}
      </div>
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
      <div className="comment__toogle row">
        <div className="toogle__title">
          comment
          <p>number of comment</p>
        </div>
        <button
          className="toogle__button"
          onClick={() => {
            setShowListComment(!showListComment);
          }}
        >
          {showListComment ? "hide comment" : "show comment"}
        </button>
      </div>
      {showListComment && (
        <>
          <div className="comment__list">
            <div className="comment__listItem">
              <div className="comment__name">name</div>
              <div className="comment__content">-content</div>
              <button className="comment__delBtn">delete comment</button>
            </div>
            <div className="comment__listItem">
              <div className="comment__name">name</div>
              <div className="comment__content">-content</div>
              <button className="comment__delBtn">delete comment</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Comment;
