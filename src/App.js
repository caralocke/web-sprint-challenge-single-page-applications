import React from "react";
import Home from './components/Home' //Imported the Home Component
import { Link, Route, Switch } from 'react-router-dom'; //Import Route and Switch

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Link id='order-pizza'>Order Now!</Link> {/*Add Link with the id 'order-pizza'*/}

      <Switch>
        <Route path='/'> {/*Add Route with path of '/' for the Home component*/}
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
