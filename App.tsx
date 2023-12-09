import { useState } from 'react'
import './App.css'

interface Recipe {
  name: string;
  ingredients: string[];
  steps: string;
}

function App() {
  const [inputName, setInputName] = useState('');
  const [inputIngredients, setInputIngredients] = useState([]);
  const [inputSteps, setInputSteps] = useState('');
  const [list, setList] = useState<Recipe[]>([
    {
      name: 'Waffles',
      ingredients: ['Flour', 'Eggs', 'Sugar', 'Milk', 'Baking Powder', 'Oil', 'Vanilla Extract'],
      steps: `Preheat the Waffle Iron 
      \nPreheat your waffle iron according to the manufacturer\'s instructions. 
      \nCombine Dry Ingredients: 
      \nIn a large mixing bowl, whisk together the all-purpose flour, sugar, baking powder, and salt. 
      \nPrepare Wet Ingredients: 
      \nIn a separate bowl, beat the eggs and then add the milk, vegetable oil, and vanilla extract. Mix well. 
      \nCombine Wet and Dry Ingredients: 
      \nPour the wet ingredients into the bowl with the dry ingredients. Stir until just combined. It\'s okay if there are a few lumps. 
      \nCooking: 
      \nLightly grease the waffle iron with non-stick cooking spray or a small amount of oil. 
      \nPour an appropriate amount of batter onto the preheated waffle iron. The amount will depend on the size of your waffle iron, so follow the manufacturer\'s guidelines. 
      \nClose the waffle iron and cook until the waffles are golden brown and crisp. 
      \nServe: 
      \nCarefully remove the waffles from the iron and serve immediately.`,
    },
    {
      name: 'Muffin',
      ingredients: ['Flour', 'Eggs', 'Sugar', 'Milk', 'Baking Powder', 'Salt', 'Milk', 'Baking Soda', 'Butter', 'Vanilla Extract'],
      steps: `Preheat Oven:
      \nPreheat your oven to 375°F (190°C). Prepare muffin tin(s) by greasing them or using paper liners.
      \nMix Dry Ingredients:
      \nIn a large mixing bowl, whisk together the flour, sugar, baking powder, baking soda, and salt.
      \nMix Wet Ingredients:
      \nIn another bowl, whisk together the buttermilk, melted butter, eggs, and vanilla extract until well combined.
      \nCombine Wet and Dry Ingredients:
      \nPour the wet ingredients into the bowl with the dry ingredients. Stir gently until just combined. Do not overmix; a few lumps are okay.
      \nAdd Mix-Ins:
      \nGently fold in your choice of mix-ins (chocolate chips, berries, nuts, etc.) into the batter.
      \nFill Muffin Cups:
      \nSpoon the batter into the prepared muffin cups, filling each about 2/3 to 3/4 full.
      \nBake:
      \nPlace the muffin tin(s) in the preheated oven and bake for about 18-20 minutes, or until the muffins are golden brown and a toothpick inserted into the center comes out clean.
      \nCool and Serve:
      \nRemove the muffins from the oven and let them cool in the pan for a few minutes before transferring them to a wire rack to cool completely.`,
    }
  ])

  function handleDelete(index: number) {
    const copy = [...list];
    copy.splice(index, 1);
    setList(copy);
  }
  function handleInputNameChange(event: any) {
    setInputName(event.target.value)
  }
  function handleInputIngredientsChange(event: any) {
    const newArrayString = event.target.value;
    const newArray = newArrayString.split(',');
    setInputIngredients(newArray);
  }
  function handleInputStepsChange(event:any) {
    setInputSteps(event.target.value)
  }
  function handleAdd(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inputName === "" || inputIngredients.length === 0 || inputSteps === "") {
      return;
    }
    const copy = [...list];
    copy.push({ name: inputName, ingredients: inputIngredients, steps: inputSteps });
    setList(copy);
  }

  return (
    <>
      <h1>Recipes:</h1>
      {list.map((value, index) => {
        return (
          <div className='recipe'>
            <h2>{value.name}:</h2>
            <h3>Ingredients:</h3>
            {value.ingredients.map((value) => {
              return (
                <div className='text'>
                  <h4>{value}</h4>
                </div>
              )
            })}
            <h3>Steps:</h3>
            <p>{value.steps}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        )
      })}
      <p/>
      <form onSubmit={(event) => handleAdd(event)}>
        <label>Recipe Name: </label>
        <input onChange={(event) => handleInputNameChange(event)}/>
        <p/>
        <label>Ingredients: (seperate by ,)</label>
        <input onChange={(event) => handleInputIngredientsChange(event)}/>
        <p/>
        <label>Steps to prepare: </label>
        <input onChange={(event) => handleInputStepsChange(event)}/>
        <p/>
        <button type='submit'>Add</button>
      </form>
    </>
  )
}

export default App
