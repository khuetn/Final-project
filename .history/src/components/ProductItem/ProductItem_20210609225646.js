//---------------------------------------------------------
import currencyFormatter from "currency-formatter";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import saleIcon from "../../assets/images/certificate-solid.svg";
import { openNotification } from "../../components/Notification/Notification";
import { ROUTES } from "../../constants/routes";
//----------------------------------------------------------------
import FirebaseContext from "../../firebase/context";
import RatingStar from "../Rating/RatingStar";
import "./ProductItem.scss";
import ModalLogin from "../../components/ModalLogin/ModalLogin";

//---------------------------------------------------------
function ProductItem({ product, index, showCount, history }) {
  const dispatch = useDispatch();
  const { firebase, user } = React.useContext(FirebaseContext);
  console.log(product.poster);
  //--------------------------------------------------------

  function checkBuyPermission(quantity) {
    let sizeDefault = ["43"];
    if (user) {
      dispatch({
        type: "ADD_TO_CART",
        payload: { product, quantity, selectedSize: sizeDefault },
      });
      openNotification({
        title: "YOUR ITEM WAS ADDED",
        description: "Please check your cart to see your item",
      });
    } else {
      history.push({
        pathname: ROUTES.LOGIN,
        state: true,
      });
    }
  }
  //--------------------------------------------------------
  const discount = product.discount ? product.discount : null;
  return (
    <div class="productItem__container-effect">
      <div className="ProductItem__container">
        <Link to={`/details/${product.id}`}>
          <div class="ProductItem__box">
            <h3 class="ProductItem__name">{product.name}</h3>
            <p class="ProductItem__subName">sub Name</p>
            <div class="ProductItem__grid">
              <div class="ProductItem__img">
                <img src={product.poster[1].url} alt="image name" />
              </div>
              <div class="mask">
                <div class="info">Quick view</div>
              </div>
            </div>
            <div class="price">
              <span
                class={
                  product.discount ? "price__actual crossline" : "price__actual"
                }
              >
                {currencyFormatter.format(product.price, { code: "VND" })}
              </span>
              {discount && (
                <>
                  <span class="price__sale">
                    {currencyFormatter.format(
                      (product.price * (100 - product.discount)) / 100,
                      { code: "VND" }
                    )}
                  </span>
                </>
              )}
            </div>
          </div>
        </Link>

        <div class="ProductItem__foot">
          <div className="Rating">
            <RatingStar rating={product.rating} />
          </div>
          <div
            class="list"
            onClick={() => {
              checkBuyPermission(1);
            }}
          >
            <div className="list__wrapper">
              <div className="list__right">
                <AiOutlinePlus
                  style={{
                    color: "white",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
                <div className="addItem">Add to Bag</div>
              </div>
            </div>
          </div>
        </div>
        {product.discount && (
          <>
            <div className="ProductItem__sale">
              <img src={saleIcon} alt="saleIcon" />
            </div>
            <div className="ProductItem__saleNumber">-{product.discount}%</div>
          </>
        )}
      </div>
    </div>
  );
}

export default withRouter(ProductItem);

{
  /* <div className="col-3" key={product.id}>
<div className="product">
  <div className="product__img">
    <Link to={`/details/${product.id}`}>
      <img src={product.poster[0].url} alt="image name" />
    </Link>
  </div>
  <div className="product__name">{product.name}</div>
  <div className="row">
    <div className="col-6">
      <div className="product__price">
        <span className="actualPrice">
          {currencyFormatter.format(product.price, {
            code: "USD",
          })}
        </span>{" "}
        <span className="discount">{product.discount}%</span>
      </div>
    </div>
    <div className="col-6">
      <div className="product__discount__price">
        {currencyFormatter.format(product.discountPrice, {
          code: "USD",
        })}
      </div>
    </div>
  </div>
</div>
</div> */
}
