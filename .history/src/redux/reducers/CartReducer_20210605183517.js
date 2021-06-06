// const initState = JSON.parse(localStorage.getItem("cart")) || {
//   products: [],
//   totalPrice: 0,
//   totalQuantities: 0,
// };

const initialState = {
  products: [],
  totalPrice: 0,
  totalQuantities: 0,
};
const CartReducer = (state = initialState, action) => {
  const actualPrice = product.discount
    ? (product.price * (100 - product.discount)) / 100
    : product.price;
  const { product, quantity } = action.payload;

  switch (action.type) {
    case "ADD_TO_CART":
      let addState = { ...state };

      const check = addState.products.find((pr) => pr.id === product.id);
      if (check) {
        const index = addState.products.findIndex((pr) => pr.id === product.id);
        addState.totalPrice =
          addState.totalPrice +
          (quantity - addState.products[index].quantity) * actualPrice;
        addState.totalQuantities =
          addState.totalQuantities +
          (quantity - addState.products[index].quantity);
        addState.products[index].quantity = quantity;
        return addState;
      } else {
        let addProduct = product;
        addProduct.quantity = quantity;
        let addState = { ...state, products: [...state, addProduct] };
        addState.totalPrice = quantity * actualPrice;
        addState.totalQuantities = addState.totalQuantities + quantity;
      }
    case "INC":
      let incState = { ...state };
      let index = incState.products.findIndex((pr) => pr.id === product.id);
      incState.totalPrice =
        incState.totalPrice +
        (quantity - incState.products[index].quantity) * actualPrice;
      incState.totalQuantities =
        incState.totalQuantities +
        (quantity - incState.products[index].quantity) * actualPrice;
      incState.products[index] += quantity;
      return incState;
    case "DEC":
      let decState = { ...state };
      let indexDec = decState.products.findIndex((pr) => pr.id === product.id);
      if (decState.products[indexDec].quantity > 1){
        decState.totalPrice =
          decState.totalPrice +
          (quantity - decState.products[indexDec].quantity) * actualPrice;
        decState.totalQuantities =
          decState.totalQuantities +
          (quantity - decState.products[indexDec].quantity) * actualPrice;
        decState.products[indexDec] += quantity;
        return decState;
      } else {
        return state;
      }
    case "REMOVE":
      let removeState = { ...state };
      let index = removeState.products.findIndex((pr) => pr.id === product.id);
      removeState.totalPrice =
        removeState.totalPrice - removeState.products[index].actualPrice*removeState.products[index].quantity;
      removeState.totalQuantities =
        removeState.totalQuantities - removeState.products[index].quantity;
      let newState = removeState.products.filter((pr) => pr.id !=== product.id);
      return newState
    default:
      return state;
  }
};
export default CartReducer;

// switch (action.type) {
//   case "ADD_TO_CART":
//     console.log("card reducer");
//     const { product, quantity } = action.payload;
//     console.log(product);
//     console.log("new ", product.quantity);
//     console.log(quantity);
//     const check = state.products.find((pr) => pr.id === product.id);
//     if (check) {
//       console.log("check true");
//       const index = state.products.findIndex((pr) => pr.id === product.id);

//       console.log(product);
//       //--------------------------------------------------------

//       console.log(product.quantity);
//       console.log(state);
//       console.log(state.totalQuantities);
//       console.log(index);
//       console.log(state.products[index].quantity);
//       product.quantity = state.products[index].quantity;

//       const Tquantities = state.totalQuantities + quantity;
//       console.log(Tquantities);
//       product.quantity = product.quantity + quantity;
//       const Tprice =
//         state.totalPrice +
//         ((product.price * (100 - product.discount)) / 100) * quantity;
//       let addState = {
//         ...state,
//         products: [...state.products],
//         totalPrice: Tprice,
//         totalQuantities: Tquantities,
//       };
//       addState.products[index].quantity =
//         state.products[index].quantity + quantity;
//       console.log(addState);
//       //------------------------------------------------------
//       return addState;
//     } else {
//       console.log("check false");
//       console.log("ok", product.discount);
//       const discount = product.discount ? product.discount : 0;
//       const discountPrice = product.price - (product.price * discount) / 100;
//       const Tprice = state.totalPrice + discountPrice * quantity;
//       const Tquantities = state.totalQuantities + quantity;
//       product.quantity = quantity;
//       let addState = {
//         ...state,
//         products: [...state.products, product],
//         totalPrice: Tprice,
//         totalQuantities: Tquantities,
//       };
//       console.log(addState);
//       localStorage.setItem("cart", JSON.stringify(addState));
//       return addState;
//     }
//   case "INC":
//     console.log("INC");
//     findPro = state.products.find((product) => product.id === action.payload);
//     index = state.products.findIndex(
//       (product) => product.id === action.payload
//     );
//     findPro.quantity += 1;
//     state.products[index] = findPro;
//     let incState = {
//       ...state,
//       totalPrice: state.totalPrice + findPro.discountPrice,
//       totalQuantities: state.totalQuantities + 1,
//     };
//     localStorage.setItem("cart", JSON.stringify(incState));
//     return incState;
//   case "DEC":
//     findPro = state.products.find((product) => product.id === action.payload);
//     index = state.products.findIndex(
//       (product) => product.id === action.payload
//     );
//     if (findPro.quantity > 1) {
//       findPro.quantity -= 1;
//       state.products[index] = findPro;
//       let decState = {
//         ...state,
//         totalPrice: state.totalPrice - findPro.discountPrice,
//         totalQuantities: state.totalQuantities - 1,
//       };
//       localStorage.setItem("cart", JSON.stringify(decState));
//       return decState;
//     } else {
//       return state;
//     }
//   case "REMOVE":
//     findPro = state.products.find((product) => product.id === action.payload);
//     const filtered = state.products.filter(
//       (product) => product.id !== action.payload
//     );
//     let removeState = {
//       ...state,
//       products: filtered,
//       totalPrice: state.totalPrice - findPro.discountPrice * findPro.quantity,
//       totalQuantities: state.totalQuantities - findPro.quantity,
//     };
//     localStorage.setItem("cart", JSON.stringify(removeState));

//     return removeState;
//   default:
//     return state;
// }
