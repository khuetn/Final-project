import { Form, Select } from "antd";
import currencyFormatter from "currency-formatter";
import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsDash, BsPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Comment from "../../components/comment/Comment";
import Loadingcss from "../../components/LoadingCss/Loadingcss";
import RatingStar from "../../components/Rating/RatingStar";
import Slide from "../../components/Slide/Slide";
import { ROUTES } from "../../constants/routes";
//----------------------------------------------------------------
import FirebaseContext from "../../firebase/context";
import "../Details/Details.scss";
//----------------------------------------------------------------
const Details = (props) => {
  const history = useHistory();

  const { firebase, user } = React.useContext(FirebaseContext);

  const [product, setProduct] = React.useState(null);

  const dispatch = useDispatch();
  const [quantity, setQuantity] = React.useState(1);
  const [size, setSize] = React.useState([]);
  //-------------------------------

  //---------------------------------------------------------------
  const { id } = useParams();
  //----------------------------------------------------------------
  React.useEffect(() => {
    getData();
  }, []);

  function getData() {
    firebase.db
      .collection("products")
      .get()
      .then((snapshot) => {
        const dataproducts = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        const abc = dataproducts.filter((product) => {
          return product.id == id;
        });
        console.log("ok", abc[0]);
        setProduct(abc[0]);
      });
  }
  //----------------------------------------------------------------

  function checkSize(e) {
    const sizeEle = e.target;
    console.log(sizeEle);
    if (size.length < quantity) {
      console.log("co the chon size", sizeEle.innerHTML);
      const newSize = [...size];
      newSize.push(sizeEle.innerHTML);
      sizeEle.classList.toggle(" .active");
      setSize(newSize);
    } else {
      console.log("chon lai size khac");
      setSize([]);
    }
  }

  function checkBuyPermission(quantity) {
    if (user) {
      console.log(quantity);
      dispatch({
        type: "ADD_TO_CART",
        payload: { product, quantity },
      });
    } else {
      history.push({
        pathname: ROUTES.LOGIN,
        state: true,
      });
    }
  }

  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div>
      {!product ? (
        <div>
          <Loadingcss />
        </div>
      ) : (
        <div className="container mt-100">
          <div className="row">
            <div className="col-40">
              <div className="details__image">
                <Slide product={product} />
              </div>
            </div>
            <div className="col-60">
              <div className="details__name">{product.name}</div>

              <div className="details__price">
                {product.discount ? (
                  <>
                    <span className="details__price-actual sale-sign">
                      {currencyFormatter.format(product.price, { code: "VND" })}
                    </span>

                    <span className="details__price-discount">
                      {currencyFormatter.format(
                        (product.price * (100 - product.discount)) / 100,
                        { code: "VND" }
                      )}
                    </span>
                  </>
                ) : (
                  <span>
                    <span className="details__price-actual">
                      {currencyFormatter.format(product.price, { code: "VND" })}
                    </span>
                  </span>
                )}
              </div>
              <div className="details__size">
                <div>select a size</div>
                {product.size.map((size) => {
                  return (
                    <span
                      onClick={(e) => {
                        checkSize(e);
                        // setSize(size.options);
                      }}
                    >
                      {size.options}
                    </span>
                  );
                })}
              </div>
              <div className="details__color">
                <span>Màu</span>
                {product.color}
              </div>
              <div className="details__sex">
                <span>Giới tính</span>
                {product.sex}
              </div>
              <div className="details__type">
                <span>Loại sản phẩm</span>
                {product.productType}
              </div>
              <div className="details__rating">
                <span>Đánh giá</span>
                <RatingStar rating={product.rating} />
              </div>
              <div className="details__incDec">
                <span className="dec" onClick={decQuantity}>
                  <BsDash />
                </span>
                <span className="quantity">{quantity}</span>
                <span className="inc" onClick={() => setQuantity(quantity + 1)}>
                  <BsPlus />
                </span>
                <button
                  className="btn-default btnAddCart"
                  onClick={() => {
                    checkBuyPermission(quantity);
                  }}
                >
                  <AiOutlineShoppingCart style={{ fontSize: "25px" }} />
                  chọn mua hàng
                </button>
                <button
                  className="btn-default btnBuy"
                  onClick={() => history.push(ROUTES.CART)}
                >
                  mua ngay
                </button>
              </div>
            </div>
          </div>
          <div className="row detail__container mt-50">
            <div className="row">
              <div className="product__description">
                <h2>Mô tả sản phẩm</h2>
                {ReactHtmlParser(product.description)}
              </div>
              <div className="product__review">
                <h2>Đánh giá sản phẩm</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                quis, aliquid veniam quaerat adipisci commodi consequuntur autem
                aut explicabo sed, aspernatur doloremque qui non sunt mollitia
                repudiandae necessitatibus, fugiat molestiae!
              </div>
            </div>
          </div>
          <div className="row">
            {/* <div className="product__description">
              <h2>Mô tả sản phẩm</h2>
              {ReactHtmlParser(product.description)}
            </div> */}
          </div>
          <div className="row">
            <Comment />
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;

// <Form onFinish={onFinish}>
//             <div className="group-price-size">
//               <div className="group-size">
//                 <Form.Item
//                   className="abc"
//                   name="size"
//                   label="Chọn kích cỡ"
//                   rules={[
//                     {
//                       required: true,
//                       message: "vui lòng chọn size",
//                     },
//                   ]}
//                 >
//                   <Select
//                     className="def"
//                     placeholder="size"
//                     style={{ width: "100%" }}
//                   >
//                     {/* {product.size.map((size) => (
//                                <Option value={size.options} key={size.options}>
//                                  {size.options}
//                                </Option>
//                              ))} */}
//                   </Select>
//                 </Form.Item>
//               </div>
//             </div>
//           </Form>
//           <Form.Item
//             name="payment"
//             label="Thanh toán"
//             hasFeedback
//             rules={[
//               {
//                 required: true,
//                 message: "Vui lòng chọn phuong thức thanh toán",
//               },
//             ]}
//           >
//             <Select placeholder="Thanh toán khi nhận hàng">
//               <Option value="Thanh toán khi nhận hàng">
//                 Thanh toán khi nhận hàng
//               </Option>
//             </Select>
//           </Form.Item>
