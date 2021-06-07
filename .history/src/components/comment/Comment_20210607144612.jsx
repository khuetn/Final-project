import React from "react";

import "./Comment.scss";
// import Formwrite from "./Formwrite/Formwrite";
import Listcomment from "./Listcomment/Listcomment";
import FirebaseContext from "../../firebase/context";
import { FaUserCircle } from "react-icons/fa";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

function Comment(props) {
  const { firebase, user } = React.useContext(FirebaseContext);
  const [showListComment, setShowListComment] = React.useState(false);
  const [productUid, setProductUid] = React.useState();
  //----------------------------------------------------------------
  const [product, setProduct] = React.useState(null);
  const [commentText, setCommentText] = React.useState("");
  let params = useParams();
  let productId = params.id;
  console.log(productId);

  React.useEffect(() => {
    console.log("getlink");
    getLink();
  }, []);

  function getLink() {
    // linkProduct.get().then((doc) => {
    //   setProduct({ ...doc.data(), id: doc.id });
    //   console.log(product);
    // });
    firebase.db
      .collection("products")
      .get()
      .then((snapshot) => {
        const dataproducts = snapshot.docs.map((doc) => {
          if (doc.data().id == productId) {
            setProductUid(doc.id);
            console.log(productUid);
          }
          return { id: doc.id, ...doc.data() };
        });
        const abc = dataproducts.filter((product) => {
          return product.id == productId;
        });
        console.log("ok", abc[0]);
        setProduct(abc[0]);
      });
    // firebase.db
    //   .collection("products")
    //   .get()
    //   .then((snapshot) => {
    //     const dataproducts = snapshot.docs.map((doc) => {
    //       console.log(doc.data().id);
    //       return { id: doc.id, ...doc.data() };
    //     });
    //     const abc = dataproducts.filter((product) => {
    //       return product.id == productId;
    //     });
    //     console.log("ok", abc[0]);
    //     setProduct(abc[0]);
    //   });
  }

  function handleAddComment(event) {
    console.log("submit");
    event.preventDefault();
    const linkProduct = firebase.db.collection("products").doc(productUid);
    console.log(productUid);
    if (!user) {
      props.history.push("/login");
    } else {
      console.log("has user");
      linkProduct.get().then((doc) => {
        console.log(doc.exists);
        if (doc.exists) {
          console.log("ok has product");
          const previousComments = doc.data().comments;
          const comment = {
            postedBy: { id: user.uid, name: user.displayName },
            created: Date.now(),
            text: commentText,
          };
          const updatedComments = [...previousComments, comment];
          linkProduct.update({ comments: updatedComments });
          setProduct((prevState) => ({
            ...prevState,
            comments: updatedComments,
          }));
          setCommentText("");
        } else {
          const comment = {
            postedBy: { id: user.uid, name: user.displayName },
            created: Date.now(),
            text: commentText,
          };
          // linkProduct.update({ comments: comment });
          // setProduct((prevState) => ({
          //   ...prevState,
          //   comments: comment,
          // }));
          // setCommentText("");
        }
      });
    }
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
                onChange={(event) => setCommentText(event.target.value)}
                value={commentText}
                className="user__text"
                col="160"
                row="10"
                placeholder="comment"
              />
              <button
                className="user__post"
                onClick={(event) => {
                  handleAddComment(event);
                }}
              >
                Add comment
              </button>
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
      {!2 > 1 ? (
        <>Loading</>
      ) : (
        <>
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
                  {product.comments.map((comment, index) => (
                    <div key={index}>
                      <p className="comment-author">
                        {comment.postedBy.name} |{" "}
                        {formatDistanceToNow(comment.created)}
                      </p>
                      <p>{comment.text}</p>
                    </div>
                  ))}
                  <button className="comment__delBtn">delete comment</button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Comment;
