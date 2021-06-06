import * as types from "../actions/Constants";
import FirebaseContext from "../../firebase/context";
import firebase from "../../firebase/firebase";
import { useSelector, useDispatch } from "react-redux";

const initState = {
  products: [],
  filteredProducts: [],
};

function ProductListReducer(state = initState, action) {
  switch (action.type) {
    case "SEARCH":
      console.log(action.payload);
      return {
        ...state,
        filteredProducts: action.payload,
      };
    case "INITIAL":
      console.log(action.payload);
      return {
        ...state,
        products: action.payload,
        filteredProducts: [],
      };
    default:
      return {
        ...state,
        filteredProducts: [],
        isFilterRender: false,
      };
  }
}
export default ProductListReducer;
