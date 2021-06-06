import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.scss";
import Loadingcss from "../../components/LoadingCss/Loadingcss";
import Pagination from "../../components/Pagination/Pagination";
function ProductList(props) {
  const { products, filteredProducts } = useSelector((state) => {
    return state.productList;
  });
  console.log(products);
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
            <div>We couldn't find any product</div>
            <span>Click here to continue searching</span>
          )}
        </>
      )}
    </div>
  );
}

export default ProductList;