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
  React.useEffect(() => {
    dispatch({ type: "NEXT", payload: 0 });
  }, []);
  function visitNextPage() {
    dispatch({ type: "NEXT", payload: currentPage });
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
