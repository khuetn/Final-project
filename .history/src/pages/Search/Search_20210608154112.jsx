import React from "react";
import { useHistory } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";
import FirebaseContext from "../../firebase/context";
import "./Search.scss";
function SearchProducts(props) {
  const { firebase } = React.useContext(FirebaseContext);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [filter, setFilter] = React.useState("");
  const history = useHistory();

  //----------------------------------------------------------------

  return (
    <div className="row">
      <div className="container mt-100">
        <ProductList />
      </div>
    </div>
  );
}

export default SearchProducts;
