import React, { useState } from "react"; //Imported useState
import { Link, Route, Switch } from 'react-router-dom'; //Import Route and Switch
import * as yup from 'yup' //Import yup
import Home from './components/Home' //Imported the Home Component
import OrderForm from './components/OrderForm' //Imported OrderForm
import schema from './validation/formSchema' //Import the schema

//create initial form values
const initialFormValues = {
  name: '',
  size: '',
}
const initialFormErrors ={
  name:'',
  size: '',
}

const App = () => {

  const [ formValues, setFormValues ] = useState(initialFormValues) //state for form values
  const [ formErrors, setFormErrors ] = useState(initialFormErrors) //state for form errors

  //write a validate function to set use the state for form errors
  const validate = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(valid => {
      setFormValues({...formErrors, [name] : ''})
    })
    .catch(err => {
      setFormErrors({...formErrors, [name] : err.errors[0]})
    })
  }

  //write a function to handle input changes
  const inputChange = (name, value) => {
    validate(name, value) //invoke the validate function inside the inputChange function to validate the inputs
    setFormValues({...formValues, [name] : value})
  }
  return (
    <>
      <h1>Lambda Eats</h1>
      <Link to='/pizza' id='order-pizza'>Order Now!</Link> {/*Add Link to OrderForm with the id 'order-pizza'*/}

      <Switch>

        <Route path='/pizza'> {/*Add Route with path of '/pizza' for the OrderForm component */}
          <OrderForm values={formValues} errors={formErrors} change={inputChange}/> {/*Passing props to OrderForm */}
        </Route>

        <Route path='/'> {/*Add Route with path of '/' for the Home component*/}
          <Home />
        </Route>

      </Switch>
    </>
  );
};
export default App;
