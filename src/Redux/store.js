import productReducer from "./Products"
import orderSummary from "./Ordersummary"

import { combineReducers, createStore } from 'redux'
const rootReduer = combineReducers({
    OrderState: orderSummary,
    ProductStateData : productReducer
})
const store = createStore(rootReduer)
console.log(store.getState())
export default store;