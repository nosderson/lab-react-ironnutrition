import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';


function App() {
  const [allFoods, setAllFoods] = useState(foods);
  console.log(allFoods);

  return (
    <div className="App">
    <AddFoodForm allFoods={allFoods} setAllFoods={setAllFoods}/>
    <Row>
    {allFoods.map((food) => {
        return (
          <div>
            <FoodBox food= {{name:food.name, calories:food.calories, image:food.image, servings:food.servings}}/>
          </div>
        );
      })}
    </Row>
 
      
    </div>
  );
}

export default App;