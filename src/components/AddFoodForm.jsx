import { useState } from 'react';

function AddFoodForm() {
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
// Pensar en implementar capitalized + clausula

// funcion de handleSubmit 

  return (
    <div>
      <h3>Add new food</h3>
      <form>
      <label value={name} htmlFor="name">Food name:</label>
        <input type="text" name="name"/>
        <br />

        <label value={calories} htmlFor="calories">Calories:</label>
        <input type="number" name="calories"/>
        <br />
        <label value={servings} htmlFor="servings">Servings:</label>
        <input type="number" name="servings"/>
        <br />

        <label value={image} htmlFor="image">Picture:</label>
        <input type="text" name="image"/>
<br />
     <button>Add to the list</button>
      </form>
      
    </div>
  );
}


export default AddFoodForm;

//onChange event


// setValues ...formValues, event.target.value (e)


