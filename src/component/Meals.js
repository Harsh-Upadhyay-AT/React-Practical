import { useSelector } from "react-redux";
import "./Meals.css";

const Meals = ({ onGetId }) => {
  const { meals } = useSelector((state) => state.ProductStateData);
  const imageClickHandler = (id) => {
    const findPizzaItem = meals?.find((item) => item.id === id);
    onGetId(findPizzaItem, "Meals");
  };

  return (
    <section className="meals">
      <label>Meals</label>
      <div className="section">
        {meals.map((meal) => (
          <div className="section-one">
            <img src={meal.img} onClick={() => imageClickHandler(meal.id)} />
            <div>{meal.name}</div>
            <div>Price {meal.price}</div>
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default Meals;
