import { useSelector } from "react-redux";
import './ClassicPizza.css';

const ClassicPizza = ({
  onGetId
}) => {
  const { classicalPizza } = useSelector((state) => state.ProductStateData);
  const imageClickHandler = (id) => {
    const findPizzaItem = classicalPizza?.find((item) => item.id === id);
    onGetId(findPizzaItem, "Classic Pizza");
  }
  
  return (
    <section className="classic">
      <label>
        Classic Pizza
      </label>
      <div className="section">{classicalPizza.map((meal) => (
        <>
          <img src={meal.img} onClick={() => imageClickHandler(meal.id)} />
          <div>{meal.name}</div>
          <div>Price {meal.price}</div>
        </>
      ))}
      </div>
    </section>
  );
};


export default ClassicPizza;
