import * as actionTypes from "./CartType";

export const addToCart = (event, theItem, itemID) => {
  event.preventDefault();
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      event: event,
      item: theItem,
      id: itemID,
    },

  };
};
export const adjustQuantity = (itemID, value) =>{
  return {
    type: actionTypes.ADJUST_QUANTITY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};

export const deleteFromCart = (event, itemID) =>{
  event.preventDefault();
  return {
    type: actionTypes.DELETE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};