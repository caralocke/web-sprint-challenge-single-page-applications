import React, {useState, useEffect} from "react";
import {Route, Link, Switch} from 'react-router-dom'
import Home from './components/Home'
import PizzaForm from './components/PizzaForm'
import axios from 'axios'
import schema from './validation/formSchema'
import * as yup from 'yup'
import './App.css'

const initialFormValues = {
  name: '',
  size: '',
  cheese: false,
  pepperoni: false,
  bbqchicken: false,
  sausage: false,
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
      // console.log('GET res.data: /n', res.data)
      setCustomers(res.data)
    })
    .catch(err => {
      debugger
      console.log(`Here's where you messed up:`, err)
    })
  }

  const postNewCustomer = newCustomer => {
    axios
    .post('https://reqres.in/api/orders', newCustomer)
    .then(res => {
      setCustomers([...customers, res.data])
    })
    .catch( err => {
      debugger
      console.log(`Here's where you messed up:`, err)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }

  const validate = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: ''
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
    console.log('formValues:\n', formValues)
  }

  const formSubmit = () => {
    const newCustomer = {
      name: formValues.name,
      size: formValues.size,
      special: formValues.special,
      toppings: ['cheese', 'pepperoni', 'bbqchicken', 'sausage'].filter(topping => formValues[topping]),
    }
    postNewCustomer(newCustomer)
  }

   
  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  },[formValues])

  return (
    <div className='App'>
      <nav>
        <h1 className='pizza-header'>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link id='order-pizza' to='/pizza'>Order now!</Link>
        </div>
      </nav>

      <Switch>
        <Route path='/pizza' component={PizzaForm}>
          <PizzaForm values={formValues} change={inputChange} submit={formSubmit} disabled={disabled} errors={formErrors}/>
        </Route>
        <Route path='/' component={Home}/>
      </Switch>
    </div>
  );
};
export default App;
