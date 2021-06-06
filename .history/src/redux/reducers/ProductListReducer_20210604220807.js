import * as types from "../actions/Constants";
import FirebaseContext from "../../firebase/context";
import firebase from "../../firebase/firebase";
import { useSelector, useDispatch } from "react-redux";

const initState = {
  products: [],
  filteredProducts: [],
  currentPage: 1,
  productPerPage: 4,
};
function getInitialProducts() {
  firebase.db
    .collection("products")
    .get()
    .then((snapshot) => {
      const products = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      initState.products = products;
      console.log(initState);
    });
}

function ProductListReducer(state = initState, action) {
  console.log("reducer");
  switch (action.type) {
    case "SEARCH":
      console.log("search");
      return {
        ...state,
        filteredProducts: action.payload,
      };
    case "NEXT":
      console.log("next");
      let newS = { ...state };
      newS.currentPage = 2;
      return newS;

    case "INITIAL":
      getInitialProducts();
      console.log("initial");
      return {
        ...state,
        products: initState.products,
        filteredProducts: [],
      };

    default:
      getInitialProducts();
      console.log("default");
      return {
        ...state,
        products: initState.products,
        filteredProducts: [],
      };
  }
}
export default ProductListReducer;
