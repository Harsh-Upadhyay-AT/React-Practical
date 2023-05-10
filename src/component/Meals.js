import { useSelector } from "react-redux";
import './Meals.css';


const Meals = ({
  onGetId
}) => {
  const { meals } = useSelector((state) => state.ProductStateData);
  const imageClickHandler = (id) => {
    const findPizzaItem = meals?.find((item) => item.id === id);
    onGetId(findPizzaItem, "Meals");
  }

  return (
    <section className="">
      <label>
        Meals
      </label>
      <div className="section">
        {meals.map((meal) => (
          <>
            <img src={meal.img} onClick={() => imageClickHandler(meal.id)} />
            <div>{meal.name}</div>
            <div>{meal.price}</div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Meals;
