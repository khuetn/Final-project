import * as types from "../actions/Constants";
import FirebaseContext from "../../firebase/context";
import firebase from "../../firebase/firebase";
import { useSelector, useDispatch } from "react-redux";

const initState = {
  products: [],
  filteredProducts: [],
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
  switch (action.type) {
    case "SEARCH":
      console.log("search");
      console.log(action.payload);
      return {
        ...state,
        filteredProducts: action.payload,
      };
    case "INITIAL":
      getInitialProducts();
      console.log("initial");
      return {
        ...state,
        products: initState.products,
        filteredProducts: [],
      };
    case "ABC":
      console.log("abc");
    default:
      getInitialProducts();
      console.log("initial");
      return {
        ...state,
        products: initState.products,
        filteredProducts: [],
      };
  }
}
export default ProductListReducer;
