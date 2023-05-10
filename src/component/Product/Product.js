import ClassicPizza from "../ClassicPizza"
import ExtravaganzaPizza from "../ExtravaganzaPizza"
import Meals from "../Meals"
import '../ClassicPizza.css'
import CartItem from "../Cart/Cart"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addOrderItem } from "../../Redux/action/OrderSummaryAction"


const Product = (props) => {
    const [selectedItem, setSelectedItem] = useState({});
    const {order} = useSelector((state) => state.OrderState)
    const dispatch = useDispatch();
    const getItemId = (item, key) =>{
        const newItem = {
            title:key,
            ...item
        }
            dispatch(addOrderItem(newItem,item.type,key))           
    }

    return (
        <div className="container" >
            <ClassicPizza onGetId={getItemId}/>
            <ExtravaganzaPizza onGetId={getItemId}/>
            <Meals onGetId={getItemId}/>
            <CartItem item={selectedItem} />
        </div>
    )
}

export default Product