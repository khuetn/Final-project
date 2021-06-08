import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GrPrevious, GrNext } from "react-icons/gr";
import "./Pagination.scss";
function Pagination(props) {
  const dispatch = useDispatch();

  const { products, filteredProducts, currentPage, productPerPage } =
    useSelector((state) => {
      return state.productList;
    });
  let limitedPage = Math.floor(filteredProducts.length / productPerPage) + 1;
  React.useEffect(() => {
    dispatch({ type: "PREVIOUS", payload: 2 });
  }, []);
  function visitNextPage() {
    console.log(limitedPage);
    if (currentPage < limitedPage) {
      dispatch({ type: "NEXT", payload: currentPage });
    }
  }
  function visitPreviousPage() {
    dispatch({ type: "PREVIOUS", payload: currentPage });
  }
  return (
    <>
      <div class="pagination">
        <span onClick={visitPreviousPage}>
          <GrPrevious />
        </span>
        <span>{currentPage}</span>
        <span onClick={visitNextPage}>
          <GrNext />
        </span>
      </div>
    </>
  );
}

export default Pagination;
