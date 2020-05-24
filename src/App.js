import React from "react";
import {Route} from 'react-router-dom'
import Homepage from "./Components/Homepage";
import Form from "./Components/Form"

const App = () => {
  return (
    <div className='App'>
    <Route path='/'>
      <Homepage />
    </Route>
    <Route path='/pizza'>
      <Form />
    </Route>
      <h1>Lambda Eats</h1>
      <p>Stay coding, while you eat</p>
    </div>
  );
};
export default App;
