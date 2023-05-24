function FoodBox({ food }) {
  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} width={200} />
      <h2>{food.name}</h2>
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <br />
      <button>Delete</button>
    </div>
  );
}

export default FoodBox;
