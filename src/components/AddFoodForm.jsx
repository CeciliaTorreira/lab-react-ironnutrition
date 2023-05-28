import { useState } from 'react';
//No conseguía que me funcionase al pasarle la función como prop pero al destructurarla me funcionó
function AddFoodForm({ addFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');
  // Podemos crear un estado diferente para cada componente o hacer uno solo
  //   const [formValues, setFormValues] = useState({
  //   name: "",
  // calories: 0,
  // image: "",
  // servings: 0})

  // const eventhandlers aquí

  const handleNameInput = function (e) {
    setName(e.target.value);
  };

  const handleImageInput = function (e) {
    setImage(e.target.value);
  };

  const handleCaloriesInput = function (e) {
    setCalories(e.target.value);
  };

  const handleServingsInput = function (e) {
    setServings(e.target.value);
  };

  // Pensar en implementar capitalized + clausula

  // funcion de handleSubmit

  const handleSubmit = function (e) {
    e.preventDefault();

    const newFood = { name, image, calories, servings };
    console.log(newFood);
    addFood(newFood);

    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };
  console.log('Adding food'); /// Funciona

  return (
    <div>
      <h3>Add new food</h3>
      <form onSubmit={handleSubmit}>
        <label value={name} htmlFor="name">
          Food name:
        </label>
        <input type="text" name="name" onChange={handleNameInput} />
        <br />

        <label value={calories} htmlFor="calories">
          Calories:
        </label>
        <input type="number" name="calories" onChange={handleCaloriesInput} />
        <br />
        <label value={servings} htmlFor="servings">
          Servings:
        </label>
        <input type="number" name="servings" onChange={handleServingsInput} />
        <br />

        <label value={image} htmlFor="image">
          Picture:
        </label>
        <input type="text" name="image" onChange={handleImageInput} />
        <br />
        <button type="submit">Add to the list</button>
      </form>
    </div>
  );
}

export default AddFoodForm;

//onChange event

// setValues ...formValues, event.target.value (e)
