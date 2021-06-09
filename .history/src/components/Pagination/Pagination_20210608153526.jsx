import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import "./Pagination.scss";
function Pagination(props) {
  const dispatch = useDispatch();

  const { products, filteredProducts, currentPage, productPerPage } =
    useSelector((state) => {
      return state.productList;
    });
  let limitedPage = Math.floor(filteredProducts.length / productPerPage);
  React.useEffect(() => {
    dispatch({ type: "PREVIOUS", payload: 2 });
  }, []);
  function visitNextPage() {
    console.log(Math.floor(filteredProducts.length / productPerPage));
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
