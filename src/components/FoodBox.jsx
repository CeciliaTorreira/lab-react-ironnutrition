function FoodBox({ food, deleteFood, index }) {   // Podemos destructurar para evitar redundancia y así que el código sea más limpio y fácil de leer.
   const deleteOneFood = ()=>{
  deleteFood(index)}
  
  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} width={200} />
      <h2>{food.name}</h2>
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p> 
      <br />
      <button onClick={deleteOneFood}>Delete</button>
    </div>
  );
}

export default FoodBox;


 //! Añadir total calories
 //! handleDelete para borrar elemento