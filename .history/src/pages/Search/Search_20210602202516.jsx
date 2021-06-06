import React from "react";
import FirebaseContext from "../../firebase/context";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Search.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { ROUTES } from "../../constants/routes";
import ProductList from "../../components/ProductList/ProductList";
function SearchProducts(props) {
  const { firebase } = React.useContext(FirebaseContext);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [filter, setFilter] = React.useState("");
  const history = useHistory();

  //----------------------------------------------------------------
  const dispatch = useDispatch();
  // const { products, filteredProductList, isFilterRender } = useSelector(
  //   (state) => state.productList
  // );
  //----------------------------------------------------------------

  return (
    <div className="row">
      <div className="container">
        <ProductList />
      </div>
    </div>
  );
}

export default SearchProducts;
