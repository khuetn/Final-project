import React from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import "./Pagination.scss";
function Pagination(props) {
  return (
    <div>
      <div class="pagination">
        <span>
          <GrPrevious />
        </span>
        <span>1</span>
        <span>
          <GrNext />
        </span>
      </div>
    </div>
  );
}

export default Pagination;
