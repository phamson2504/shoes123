import * as actionTypes from "./CartType";
import allProducts from "../db/data";

const INITIAL_STATE = {
  allProducts: allProducts, //products without qty
  cart: [], //product with added qty
  currentItem: null,
};
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.allProducts.find(
        (prod) => prod.id === action.payload.id
      );
      const checkItemLimit = state.cart.find(
        (item) => item.qty === action.payload.item.maxQuantity && item.id === action.payload.item.id
      );
      console.log(checkItemLimit)
      if (checkItemLimit) {
        alert("Sorry, the quantity for this product is finished");
        let btn = action.payload.event.currentTarget;
        btn.setAttribute("disabled", "true");
        btn.classList.remove("btn-dark");
        btn.classList.toggle("btn-secondary");
        btn.innerHTML = "Sold Out";
        return state;
      }
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.ADJUST_QUANTITY:
      return{
        ...state,
        cart: state.cart.map(item => 
          item.id === action.payload.id
            ? {...item, qty: action.payload.qty}
            : item)
      }
    case actionTypes.DELETE_FROM_CART:
      return{
        ...state,
        cart: state.cart.filter((item) => 
            item.id !== action.payload.id),
      }
    default:
      return state;
  }
}

export default cartReducer;