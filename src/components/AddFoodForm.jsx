import { useState } from 'react';

function AddFoodForm() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  return (
    <div>
      <h3>Add new food</h3>
      <form>
      <label htmlFor="name">Food name:</label>
        <input type="text" name="name"/>
        <br />

        <label htmlFor="calories">Calories:</label>
        <input type="number" name="calories"/>
        <br />
        <label htmlFor="servings">Servings:</label>
        <input type="text" name="servings"/>
        <br />

        <label htmlFor="image">Picture:</label>
        <input type="text" name="image"/>

    
      </form>
      
    </div>
  );
}


export default AddFoodForm;