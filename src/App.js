import React from "react";
import { Link, Route, Switch } from 'react-router-dom'; //Import Route and Switch
import Home from './components/Home' //Imported the Home Component
import OrderForm from './components/OrderForm' //Imported OrderForm

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Link to='/pizza' id='order-pizza'>Order Now!</Link> {/*Add Link to OrderForm with the id 'order-pizza'*/}

      <Switch>
        <Route path='/pizza'> {/*Add Route with path of '/pizza' for the OrderForm component */}
          <OrderForm />
        </Route>

        <Route path='/'> {/*Add Route with path of '/' for the Home component*/}
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
