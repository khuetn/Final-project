import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Loadingcss from "../../components/LoadingCss/Loadingcss";
import Pagination from "../../components/Pagination/Pagination";
import { ROUTES } from "../../constants/routes";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.scss";
function ProductList(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const { products, filteredProducts, currentPage, productPerPage } =
    useSelector((state) => {
      return state.productList;
    });
  console.log(products);
  function comback() {
    dispatch({ type: "DISCOUNT", payload: {} });
    history.push(ROUTES.HOME);
  }
  return (
    <>
      <div>Product List</div>
      <div className="ProductList__container row">
        {filteredProducts.length !== 0 ? (
          <>
            {filteredProducts.map((product, index) => {
              if (
                index < currentPage * productPerPage &&
                index >= (currentPage - 1) * productPerPage
              )
                return (
                  <ProductItem
                    key={product.id}
                    showCount={false}
                    product={product}
                    index={index}
                  />
                );
            })}
            <Pagination />
          </>
        ) : (
          <>
            {products.length == 0 ? (
              <div>
                <Loadingcss />
              </div>
            ) : (
              <div className="noResult">
                <span>We couldn't find any product.</span>
                <span>
                  Click
                  <span onClick={comback}> here </span>
                  to continue shopping
                </span>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default ProductList;
