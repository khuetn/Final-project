import React from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import "./Pagination.scss";
function Pagination(props) {
  function visitPreviousPage() {}
  return (
    <>
      <div class="pagination">
        <span onClick={visitPreviousPage}>
          <GrPrevious />
        </span>
        <span>1</span>
        <span>
          <GrNext />
        </span>
      </div>
    </>
  );
}

export default Pagination;
