import { Form, Select } from "antd";
import currencyFormatter from "currency-formatter";
import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsDash, BsPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Comment from "../../components/comment/Comment";
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
  const [quantity, setQuantity] = useState(1);
  //-------------------------------
  const [form] = Form.useForm();
  const { Option } = Select;

  //----------------------------------
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
        setProduct(dataproducts[id - 1]);
      });
  }
  //----------------------------------------------------------------

  // const { productlist, loading, error } = useSelector(
  //   (state) => state.products
  // );
  //add discount
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

  const discount = 0.1;
  const pricediscount = product ? product.price * (1 - discount) : null;

  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div>
      {!product ? (
        <div>Loading....</div>
      ) : (
        <div className="container mt-100">
          <div className="row detail__container">
            <div className="col-6">
              <div className="details__image">{/* <Slide /> */}</div>
            </div>
            <div className="col-6">
              <div className="details__name">{product.name}</div>
              {/* <div className="details__rating">
                <RatingStar />
              </div> */}

              <div className="details__price">
                {pricediscount ? (
                  <>
                    <span className="details__price-actual sale-sign">
                      {currencyFormatter.format(product.price, { code: "VND" })}
                    </span>

                    <span className="details__price-discount">
                      {currencyFormatter.format(pricediscount, {
                        code: "VND",
                      })}
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
                  return <span>{size.options}</span>;
                })}
              </div>
              <div className="details__color">
                <span>M??u</span>
                {product.color}
              </div>
              <div className="details__sex">
                <span>Gi???i t??nh</span>
                {product.sex}
              </div>
              <div className="details__type">
                <span>Lo???i s???n ph???m</span>
                {product.productType}
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
                  className="btn-default"
                  onClick={() => {
                    checkBuyPermission(quantity);
                  }}
                >
                  <AiOutlineShoppingCart />
                  ch???n mua h??ng
                </button>
              </div>
              {/* <div className="details__p">
                <h4>Th??ng tin s???n ph???m</h4>
                <p>
                  m?? s???n ph???m: <span>{product.id}</span>
                </p>
                <p>
                  nh?? x???n xu???t: <span>{product.key}</span>
                </p>
                <p>
                  b??? s??u t???p: <span>{product.collections}</span>
                </p>
                <p>
                  lo???i s???n ph???m: <span>{product.productType}</span>
                </p>
                <p>
                  d??ng s???n ph???m: <span>{product.NSX}</span>
                </p>
                <p>
                  m??u s???c: <span>{product.color}</span>
                </p>
                <p>
                  gi???i t??nh: <span>{product.sex}</span>
                </p>
              </div> */}

              {/* <div className="details__freeship">
                <img
                  src="https://shopbongda.vn/wp-content/uploads/2020/02/freeship-1.png"
                  alt="free-ship"
                />
                <p>
                  Mi???n ph?? giao h??ng (t???i ??a 30k)cho ????n h??ng t??? 249k Xem chi
                  ti???t
                </p>
              </div> */}

              {/* <div className="details__prices">
                <span className="details__actaul">
                  {currencyFormatter.format(product.price, { code: "VND" })}
                </span>
                <span className="details__discount">
                  {currencyFormatter.format(product.discountPrice, {
                    code: "VND",
                  })}
                </span>
              </div> */}

              {/* <div className="details__info">
                <div className="details__incDec">
                  <span className="dec" onClick={decQuantity}>
                    <BsDash />
                  </span>
                  <span className="quantity">{quantity}</span>
                  <span
                    className="inc"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <BsPlus />
                  </span>
                  <button
                    className="btn-default"
                    onClick={() => {
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: { product, quantity },
                      });
                    }}
                  >
                    <AiOutlineShoppingCart />
                    ch???n mua h??ng
                  </button>
                </div>
              </div> */}
            </div>
            <div className="row">
              <div className="product__description">
                <h2>M?? t??? s???n ph???m</h2>
                {ReactHtmlParser(product.description)}
              </div>
              <div className="product__review">
                <h2>????nh gi?? s???n ph???m</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                quis, aliquid veniam quaerat adipisci commodi consequuntur autem
                aut explicabo sed, aspernatur doloremque qui non sunt mollitia
                repudiandae necessitatibus, fugiat molestiae!
              </div>
            </div>
          </div>
          <div className="row">
            {/* <div className="product__description">
              <h2>M?? t??? s???n ph???m</h2>
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
//                   label="Ch???n k??ch c???"
//                   rules={[
//                     {
//                       required: true,
//                       message: "vui l??ng ch???n size",
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
//             label="Thanh to??n"
//             hasFeedback
//             rules={[
//               {
//                 required: true,
//                 message: "Vui l??ng ch???n phuong th???c thanh to??n",
//               },
//             ]}
//           >
//             <Select placeholder="Thanh to??n khi nh???n h??ng">
//               <Option value="Thanh to??n khi nh???n h??ng">
//                 Thanh to??n khi nh???n h??ng
//               </Option>
//             </Select>
//           </Form.Item>
