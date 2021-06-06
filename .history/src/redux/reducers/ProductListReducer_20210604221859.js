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
      let nextS = { ...state };
      newS.currentPage =
        nextS.currentPage > 2 ? nextS.currentPage : nextS.currentPage + 1;
      return newS;
    case "PREVIOUS":
      console.log("previous");
      let prevS = { ...state };
      prevS.currentPage =
        prevS.currentPage < 2 ? prevS.currentPage : prevS.currentPage - 1;
      return prevS;
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
