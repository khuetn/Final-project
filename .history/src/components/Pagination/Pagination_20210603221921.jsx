import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GrPrevious, GrNext } from "react-icons/gr";
import "./Pagination.scss";
function Pagination(props) {
  const { products, filteredProducts, currentPage, productPerPage } =
    useSelector((state) => {
      return state.productList;
    });
  console.log(currentPage);
  const dispatch = useDispatch();

  function visitNextPage() {
    console.log("ok next");
    dispatch({ type: "NEXT", payload: currentPage });
    console.log("done");
  }
  function visitPreviousPage() {
    alert("ok");
    dispatch({ type: "PREVIOUS", payload: currentPage });
  }
  return (
    <>
      <div class="pagination">
        <span onClick={visitPreviousPage}>
          <GrPrevious />
        </span>
        <span>1</span>
        <span onClick={visitNextPage}>
          <GrNext />
        </span>
      </div>
    </>
  );
}

export default Pagination;
