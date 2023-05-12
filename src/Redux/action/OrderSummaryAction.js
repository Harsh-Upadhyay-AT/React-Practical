import * as actions from "../action-type";

export const addOrderItem = (item, catogary, key) => {
  return {
    type: actions.ADD_ORDER,
    item,
    catogary,
    key,
  };
};

export const incrementOrderItem = (updatedQty, price) => {
  return {
    type: actions.INCREMENT_QTY,
    updatedQty,
    price,
  };
};

export const decrementOrderItem = (removeQty, price) => {
  return {
    type: actions.DECREMENT_QTY,
    removeQty,
    price,
  };
};

