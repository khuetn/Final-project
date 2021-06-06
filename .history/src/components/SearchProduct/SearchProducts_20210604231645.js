import React from "react";
import FirebaseContext from "../../firebase/context";
import ProductItem from "../ProductItem/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./SearchProducts.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { ROUTES } from "../../constants/routes";

function SearchProducts(props) {
  const ProductState = useSelector((state) => state.productList);
  console.log(ProductState);
  const { firebase } = React.useContext(FirebaseContext);

  const [products, setProducts] = React.useState(ProductState.products);
  const [filter, setFilter] = React.useState("");
  const history = useHistory();

  //----------------------------------------------------------------
  const dispatch = useDispatch();

  // ----------------------------------------------------------------

  function handleSearch(event) {
    event.preventDefault();
    const query = filter.toLowerCase();

    dispatch({ type: "SEARCH", payload: query });

    history.push(ROUTES.SEARCH);
  }
  return (
    <>
      <form onSubmit={handleSearch}>
        <div>
          <input
            placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
            onChange={(event) => setFilter(event.target.value)}
          />
          <button>
            <AiOutlineSearch
              style={{
                fontSize: "22px",
              }}
            />
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchProducts;
