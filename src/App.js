import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foodList, setFoodList] = useState(foods);

  return (
    <div className="App">

   <AddFoodForm/>

    <h3 >Food List</h3>
      <section className="food-list">
                {foodList.map((eachFood, index) => (
          <FoodBox key={index} food={eachFood} />
        ))}
      </section>
    </div>
  );
}

export default App;
