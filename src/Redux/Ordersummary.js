import * as actions from './action-type';

const intialState = {
  order: [],
  tax: 5,
  subTotal: 0,
  total: 0,
  classicPizza: 0,
  extravaganzaPizza: 0,
  meals: 0,
  qty: {
    quattroStagioni: 0,
    pizzaPorchetta: 0,
    pizzaMargherita: 0,
    pizzaCapricciosa: 0,
    cheesePizza:0,
    veggiePizza:0,
    pepperoniPizza:0,
    margheritaPizza:0,
    extravaganzaPizza:0,
    hawaiianPizza:0,
    bread:0,
    sandWich:0,
    fruitSalad:0,
    burger:0,
    iceCream:0
  }
}

const orderSummary = (state = intialState, action) => {
  switch (action.type) {
    case actions.ADD_ORDER:
      const findPizzaItem = state.order?.find((order) => order.id === action.item.id);
      if (!findPizzaItem) {
        return {
          ...state,
          order: [...state.order, action.item],
          qty: {
            ...state.qty,
            [action.item.type]: state.qty[action.catogary] + 1
          },
          subTotal: state.subTotal + action.item.price
        }
      }

      return {
        ...state,
        subTotal: state.subTotal + action.item.price,
        qty: {
          ...state.qty,
          [action.item.type]: state.qty[action.catogary] + 1
        }
      }
  
    case actions.INCREMENT_QTY:
      return {
        ...state,
        qty: action.updatedQty,
        subTotal: state.subTotal + action.price
      }

    case actions.DECREMENT_QTY:
      return {
        ...state,
        qty: action.removeQty,
        subTotal: state.subTotal - action.price
      }

    default:
      return state;
  }
};

export default orderSummary;