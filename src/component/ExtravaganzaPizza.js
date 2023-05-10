import { useSelector } from "react-redux";
import './ExtravaganzaPizza.css';

const ExtravaganzaPizza = ({
  onGetId
}) => {

  const { extravaganzapizza } = useSelector((state) => state.ProductStateData);
const imageClickHandler = (id) =>{
const findPizzaItem = extravaganzapizza?.find((item)=> item.id === id);
    onGetId(findPizzaItem , "ExtravaganzaPizza");
  }
  
  return (
    <section className="extravaganzaPizza">
      <label>
        ExtravaganzaPizza
      </label>
      <div className="section">
        {extravaganzapizza.map((meal) => (
          <>
            <img src={meal.img} onClick={()=>imageClickHandler(meal.id)} />
            <div>{meal.name}</div>
            <div>{meal.price}</div>
          </>
        ))}
      </div>
    </section>
  );
};

export default ExtravaganzaPizza;

