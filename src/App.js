import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);

  // //! Estado para la búsqueda de comida
  const [filteredFoundFood, setFoundFood] = useState(foods);
  // Arreglado problema por el cual al principio no me mostraba nada hasta que buscase alguna comida.
  
  const addFood = function (newFood) {
    const newFoodList = [...foodList, newFood];
    setFoodList(newFoodList);
  };

  const searchFood = (search) => {
    const foundFood = foods.filter((eachFood) => {
      return eachFood.name.toLowerCase().includes(search.toLowerCase());
    });

    setFoundFood(foundFood);
  };


  const deleteFood =(index) =>{
    console.log("Borrando comida"); // Funciona
  // Nuevo array
    const newFoodList = [...foodList]
    newFoodList.splice(index, 1)
    setFoodList(newFoodList)
  
  };


  return (
    <div className="App">
      <AddFoodForm addFood={addFood} />
      {/* Me olvidé de añadirle la función como props para que el componente pueda llamarla */}

      <Search searchFood={searchFood} />

      {/* Tenemos un array y hacemos un .map() */}
      <h3>Food List</h3>
      <section className="food-list">
        {filteredFoundFood.map((eachFood, index) => (
          <FoodBox key={index} food={eachFood} deleteFood={deleteFood} />
        ))}
      </section>
    </div>
  );
}

export default App;
