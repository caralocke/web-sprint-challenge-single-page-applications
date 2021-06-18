import React, { useState } from "react"; //Imported useState
import { Link, Route, Switch } from 'react-router-dom'; //Import Route and Switch
import Home from './components/Home' //Imported the Home Component
import OrderForm from './components/OrderForm' //Imported OrderForm

//create initial form values
const initialFormValues = {
  name: ''
}

const App = () => {

  const [ formValues, setFormValues ] = useState(initialFormValues)

  //write a function to handle input changes
  const inputChange = (name, value) => {
    setFormValues({...formValues, [name] : value})
  }
  return (
    <>
      <h1>Lambda Eats</h1>
      <Link to='/pizza' id='order-pizza'>Order Now!</Link> {/*Add Link to OrderForm with the id 'order-pizza'*/}

      <Switch>

        <Route path='/pizza'> {/*Add Route with path of '/pizza' for the OrderForm component */}
          <OrderForm values={formValues} change={inputChange}/> {/*Passing props to OrderForm */}
        </Route>

        <Route path='/'> {/*Add Route with path of '/' for the Home component*/}
          <Home />
        </Route>

      </Switch>
    </>
  );
};
export default App;
