import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.scss";
import Loadingcss from "../../components/LoadingCss/Loadingcss";
import { FcPrevious } from "react-icons/fc";

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
          <div class="pagination">
            <span>previous</span>
            <span>current</span>
            <span>next</span>
          </div>
        </>
      ) : (
        <>
          {products.length === 0 ? (
            <div>
              <Loadingcss />
            </div>
          ) : (
            <>
              {products.map((product, index) => {
                return (
                  <ProductItem
                    key={product.id}
                    showCount={false}
                    product={product}
                    index={index}
                  />
                );
              })}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default ProductList;
