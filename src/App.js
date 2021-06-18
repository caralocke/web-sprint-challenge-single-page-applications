import React, { useState } from "react"; //Imported useState
import { Link, Route, Switch } from 'react-router-dom'; //Import Route and Switch
import * as yup from 'yup' //Import yup
import Home from './components/Home' //Imported the Home Component
import OrderForm from './components/OrderForm' //Imported OrderForm
import schema from './validation/formSchema' //Import the schema
import axios from 'axios' //Import axios
import styled from 'styled-components' //Import styled

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

//create initial form values
const initialFormValues = {
  name: '',
  size: '',
  cheese: false,
  pepperoni: false,
  sausage: false,
  vegetable: false,
  special: ''
}
const initialFormErrors ={
  name:'',
  size: '',
  special: ''
}

const App = () => {

  const [ formValues, setFormValues ] = useState(initialFormValues) //state for form values
  const [ formErrors, setFormErrors ] = useState(initialFormErrors) //state for form errors
  const [ customers, setCustomers ] = useState([]) //state for customers

  //write a validate function to set use the state for form errors
  const validate = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({...formErrors, [name] : ''})
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

  //write a function to make a post request and submit the form
  const formSubmit = () => {
    const newCustomer={
      name: formValues.name,
      size: formValues.size,
      cheese: formValues.cheese,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      vegetable: formValues.vegetable,
      special: formValues.special
    }
    axios
    .post(`https://reqres.in/api/orders`, newCustomer)
    .then(res => {
      console.log('res.data for post request:\n', res.data)
      setCustomers([...customers, res.data])
    })
    .catch(err => {
      console.log(`Here's where you messed up: \n`, err)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }

  return (
    <StyledApp>
      <h1>Lambda Eats</h1>
      <Link to='/'>Home</Link>
      <Link to='/pizza' id='order-pizza'>Order Now!</Link> {/*Add Link to OrderForm with the id 'order-pizza'*/}
      
      <Switch>

        <Route path='/pizza'> {/*Add Route with path of '/pizza' for the OrderForm component */}
          <OrderForm values={formValues} errors={formErrors} change={inputChange} submit={formSubmit}/> {/*Passing props to OrderForm */}
        </Route>

        <Route path='/'> {/*Add Route with path of '/' for the Home component*/}
          <Home />
        </Route>

      </Switch>
    </StyledApp>
  );
};
export default App;
