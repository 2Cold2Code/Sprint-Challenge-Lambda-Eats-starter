import React, {useState} from "react";
import {Route, Switch} from 'react-router-dom'
import Homepage from "./Components/Homepage";
import Pizza from "./Components/Pizza"
import Order from "./Components/Order";

const App = () => {

  const [order, setOrder] = useState({
    name: '',
    size: [],
    sauce: [],
    toppings: [],
    special: '',
  })

  return (
    <div className='App'>
      <h1>Lambda Eats</h1>
      <p>Stay coding, while you eat</p>
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/pizza'>
          <Pizza  setOrder={setOrder}/>
        </Route>
        <Route path='/order'>
          <Order order={order} />
        </Route>
    </Switch>  
    </div>
  );
};
export default App;
