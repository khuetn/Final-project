import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import ProductListReducer from "./ProductListReducer";
import ProductsReducer from "./ProductsReducer";
const rootReducer = combineReducers({
  products: ProductsReducer,
  cart: CartReducer,
  productList: ProductListReducer,
});
export default rootReducer;
