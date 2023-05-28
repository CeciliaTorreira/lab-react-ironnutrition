import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foodList, setFoodList] = useState(foods);

  const addFood = function (newFood) {
    const newFoodList = [...foodList, newFood];
    setFoodList(newFoodList);
  };

  return (
    <div className="App">
      <AddFoodForm addFood={addFood} />

      {/* Me olvidé de añadirle la función como props para que el componente pueda llamarla */}

      {/* Tenemos un array y hacemos un .map() */}
      <h3>Food List</h3>
      <section className="food-list">
        {foodList.map((eachFood, index) => (
          <FoodBox key={index} food={eachFood} />
        ))}
      </section>
    </div>
  );
}

export default App;
