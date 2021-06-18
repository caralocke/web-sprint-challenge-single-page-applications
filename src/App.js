import React, { useState } from "react"; //Imported useState
import { Link, Route, Switch } from 'react-router-dom'; //Import Route and Switch
import * as yup from 'yup' //Import yup
import Home from './components/Home' //Imported the Home Component
import OrderForm from './components/OrderForm' //Imported OrderForm
import schema from './validation/formSchema' //Import the schema
import axios from 'axios' //Import axios
import styled from 'styled-components' //Import styled
import brickImg from './images/brick.jpg'

const StyledApp = styled.div`
  font-family: sans-serif;
  text-align: center;
  width: 100%;
  background-image: url(${brickImg});
  background-size: cover;
`

const StlyedTitle = styled.h1`
  color:${({theme}) => theme.primaryColor};
  margin-left: 10px;
  -webkit-text-stroke-width: .7px;
  -webkit-text-stroke-color: ${({theme}) => theme.black};

  &:hover {
    color: ${({theme}) => theme.secondaryColor};
    transform: scale(1.1);
  }
`

const StyledTop = styled.nav`
  display:flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({theme}) => theme.secondaryColor};
`

const StyledNav = styled.div`
  display:flex;
  justify-content:space-between;  
`

const StyledLinks = styled(Link)`
  margin-right: 10px;

  &:hover {    
    transform: scale(1.1);
  }
`

const StyledButton = styled.button`
  background-color: ${({theme}) => theme.primaryColor};
  color: ${({theme}) => theme.secondaryColor};
  font-weight: bold;
  font-size: 14px;
  -webkit-text-stroke-width: .3px;
  -webkit-text-stroke-color: orange;

  &:hover {
    background-color: ${({theme}) => theme.tertiaryColor};
    -webkit-text-stroke-width: .5px;
    -webkit-text-stroke-color: ${({theme}) => theme.primaryColor};
  }
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
      <StyledTop>
         <StlyedTitle>Lambda Eats</StlyedTitle>
         <StyledNav>
          <StyledLinks to='/'><StyledButton>Home</StyledButton></StyledLinks>
          <StyledLinks to='/pizza' id='order-pizza'><StyledButton>Order Now!</StyledButton></StyledLinks> {/*Add Link to OrderForm with the id 'order-pizza'*/}
         </StyledNav>
      </StyledTop>

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
