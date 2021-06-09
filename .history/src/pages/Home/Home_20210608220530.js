import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Banner from "../../components/Banner/index";
import ProductList from "../../components/ProductList/ProductList";
import SocialLink from "../../components/SocialLink/SocialLink";
//----------------------------------------------------------------
import FirebaseContext from "../../firebase/context";
import { getProducts } from "../../redux/actions/Products";

//----------------------------------------------------------------

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const { firebase, user } = React.useContext(FirebaseContext);
  const [products, setProducts] = React.useState(null);
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

        setProducts(dataproducts);
      });
  }
  //----------------------------------------------------------------

  // const { products } = useSelector((state) => state.products);
  return (
    <div>
      <div>
        <div className="container mt-100">
          <Banner />
          <SocialLink />
        </div>
        <div className="container mt-100">
          <div className="ProductList__title">
            <div className="ProductList__title-content">Product List</div>
            <span></span>
          </div>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Home;

/* {!products ? (
            <div>Loading...</div>
          ) : (
            <>
              {products.map((product) => (
                <div className="col-3" key={product.id}>
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
                </div>
              ))}
            </>
          )} */
