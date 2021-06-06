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
  console.log(action);
  switch (action.type) {
    case "SEARCH":
      console.log("search");
      console.log(action.payload);
      return {
        ...state,
        filteredProducts: action.payload,
      };
    case "NEXT":
      let nextPage = [...action.payload];
      console.log(nextPage);
      if (nextPage > 3) {
        nextPage = 2;
      } else {
        nextPage = nextPage + 1;
      }
      console.log(nextPage);

      return {
        ...state,
        currentPage: nextPage,
      };
    case "PREVIOUS":
      console.log("previous");
      console.log(action.payload);
      const prevPage = action.payload < 2 ? 1 : action.payload - 1;
      console.log(prevPage);
      return {
        ...state,
        currentPage: prevPage,
      };
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
