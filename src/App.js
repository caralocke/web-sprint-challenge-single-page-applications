import React, {useState} from "react";
import {Route, Link, Switch} from 'react-router-dom'
import Home from './components/Home'
import PizzaForm from './components/PizzaForm'
import axios from 'axios'
import './App.css'

const initialFormValues = {
  name: '',
  size: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  special: '',
}

const initialFormErrors ={
  name: '',
  size: '',
  special: '',
}

const initialCustomers = []
const initialDisabled = true

const App = () => {

  const [customers, setCustomers] = useState(initialCustomers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  
  const getCustomers = () => {
    axios
    .get('https://reqres.in/api/orders')
    .then(res => {
      setCustomers(res.data)
    })
    .catch(err => {
      debugger
      console.log(`Here's where you messed up:`, err)
    })
  }

  const postNewCustomer = newCustomer => {
    axios
    .post('https://reqres.in/api/orders')
    .then(res => {
      setCustomers([res.data, ...customers])
    })
    .catch(err => {
      debugger
      console.log(`Here's where you messed up:`, err)
    })
    .finally(() => {
      setFormValues(initialFormErrors)
    })
  }

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const formSubmit = () => {
    const newCustomer = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      special: formValues.special.trim(),
      // toppings: ['cheese', 'pepperoni', 'bbqchicken', 'sausage'].filter(top => {
      //   formValues[top]
      // })
    }
  }

  return (
    <div className='App'>
      <nav>
        <h1 className='pizza-header'>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Order now!</Link>
        </div>
      </nav>

      <Switch>
        <Route path='/' component={Home}>
        </Route>
        <Route path='/pizza' component={PizzaForm}>
          <PizzaForm values={formValues} change={inputChange} submit={formSubmit} disabled={disabled} errors={formErrors}/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
