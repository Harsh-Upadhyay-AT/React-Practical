import { useDispatch, useSelector } from "react-redux"; 
import "./Cart.css";
import {
  decrementOrderItem,
  incrementOrderItem,
} from "../../Redux/action/OrderSummaryAction";

const Cart = (props) => {
  const { order, qty, subTotal, tax } = useSelector(
    (state) => state.OrderState
  );
  const dispatch = useDispatch();
  const incrementOrderQty = (catogary, price) => {
    const newQty = { ...qty };
    newQty[catogary] = newQty[catogary] + 1;
    dispatch(incrementOrderItem(newQty, price));
  };

  const decreamentOrderQty = (catogary, price) => {
    const newQty = { ...qty };
    if (newQty[catogary] > 1) {
      newQty[catogary] = newQty[catogary] - 1;
      dispatch(decrementOrderItem(newQty, price));
    } else {
      newQty[catogary] = 0;
      dispatch(decrementOrderItem(newQty, price));
    }
  };


  const Totalprice = (subTotal * tax) / 100;
  return (
    <div className="cart">
      <div className="title">Products Details</div>
      {order?.length > 0
        ? order?.map((product, index) => {
            return (
              <CartItem
                key={`${index}`}
                title={product.name}
                category={product.type}
                onIncrement={incrementOrderQty}
                onDecrement={decreamentOrderQty}
                price={product.price}
                id={product.id}
                image={product.img}
                quantity={qty[product.type]}
              />
            );
          })
        : "No products"}
      <div>
        <div className="total-price">SubTotal ${subTotal}</div>
      </div>
      <div className="tax">Tax-{Totalprice}</div>
      <div className="Total price">Total price {subTotal + Totalprice}</div>
      
    </div>
  );
};

const CartItem = ({
  quantity,
  title,
  price,
  category,
  onIncrement,
  onDecrement,
  image,

  
}) => {
  if (quantity === 0) {
    return null;
  }

  return (
    <div className="item">
      <div className="description">
        <span>{title}</span>
      </div>
      <img src={image} alt="Product image" height="50" />
      <div className="quantity">
        <button
          className="minus-btn"
          type="button"
          name="button"
          onClick={() => onDecrement(category, price)}
        >
          -
        </button>
        {quantity}
        <button
          className="plus-btn"
          type="button"
          name="button"
          onClick={() => onIncrement(category, price)}
        >
          +
        </button>
      </div>
      <div className="total-price">${price * quantity}</div>

    </div>
  );
};

export default Cart;
