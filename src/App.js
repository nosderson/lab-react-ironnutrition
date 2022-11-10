import { useState } from 'react';
import './App.css';
import { Row, Col, Divider, Button } from 'antd';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {

  const [allFoods, setFoods] = useState(foods);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      {showForm && (
        <AddFoodForm allFoods={allFoods} setFoods={setFoods} />
      )}

      <Button
        onClick={() => {
          setShowForm(!showForm);
      }} >
      {showForm ? <span>Hide Form</span> : <span>Show Form</span>}  
        </Button>

      <Search search={search} setSearch={setSearch} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {allFoods.length === 0 ?
          <Col><p>Ooops! There is no more content to show!</p></Col> :
          allFoods
            .filter(food => 
              food.name.toLowerCase().includes(search.toLowerCase())
            )
            .map(food => {
              return (
                <FoodBox food={food} key={food.name} allFoods={allFoods} setFoods={setFoods} />
              )
            })}
      </Row>

    </div>
  );
}

export default App;