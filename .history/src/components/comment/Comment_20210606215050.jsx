import React from "react";

import "./Comment.scss";
// import Formwrite from "./Formwrite/Formwrite";
import Listcomment from "./Listcomment/Listcomment";
import FirebaseContext from "../../firebase/context";
import { FaUserCircle } from "react-icons/fa";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

function Comment(props) {
  const { firebase, user } = React.useContext(FirebaseContext);
  const [showListComment, setShowListComment] = React.useState(false);

  //----------------------------------------------------------------
  const { productId } = useParams();

  console.log("ok", productId);
  const linkProduct = firebase.db.collection("links").doc(productId);

  function handleAddComment() {
    if (!user) {
      props.history.push("/login");
    } else {
      linkRef.get().then((doc) => {
        if (doc.exists) {
          const previousComments = doc.data().comments;
          const comment = {
            postedBy: { id: user.uid, name: user.displayName },
            created: Date.now(),
            text: commentText,
          };
          const updatedComments = [...previousComments, comment];
          linkRef.update({ comments: updatedComments });
          setLink((prevState) => ({
            ...prevState,
            comments: updatedComments,
          }));
          setCommentText("");
        }
      });
    }

  //----------------------------------------------------------------

  return (
    <div className="container comment">
      <div className="comment__title">
        {user ? (
          <>Join the discussion</>
        ) : (
          <>
            <NavLink
              to={{
                pathname: ROUTES.LOGIN,
                state: true,
              }}
            >
              <span className="comment__logBtn">Login to comment</span>
            </NavLink>
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
            const prevState = showListComment;
            setShowListComment(!prevState);
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
              <div className="comment__content">
                -Lorem ipsum dolor sit amet
              </div>
              <button className="comment__delBtn">delete comment</button>
            </div>
            <div className="comment__listItem">
              <div className="comment__name">name</div>
              <div className="comment__content">
                -Lorem ipsum dolor sit amet
              </div>
              <button className="comment__delBtn">delete comment</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Comment;
