import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import FirebaseContext from "../../firebase/context";
import "./SearchProducts.scss";

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
            placeholder="search product name or brand"
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
