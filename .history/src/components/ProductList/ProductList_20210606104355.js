import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.scss";
import Loadingcss from "../../components/LoadingCss/Loadingcss";
import Pagination from "../../components/Pagination/Pagination";
import { ROUTES } from "../../constants/routes";
import {
  Link,
  NavLink,
  useHistory,
  withRouter,
  useLocation,
} from "react-router-dom";
function ProductList(props) {
  const history = useHistory();

  const { products, filteredProducts } = useSelector((state) => {
    return state.productList;
  });
  console.log(products);
  function comback() {
    dispatch({ type: "DISCOUNT", payload: {} });
    history.push(ROUTES.SEARCH);
  }
  return (
    <div className="ProductList__container row">
      {filteredProducts.length !== 0 ? (
        <>
          {filteredProducts.map((product, index) => {
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
                <NavLink onClick={comback}> here </NavLink>
                to continue shopping
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ProductList;
