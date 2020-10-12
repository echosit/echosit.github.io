import React from 'react';
import { Home } from './views/Home';
import { About } from './views/About';
import { Portfolio } from './views/Portfolio';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Route, Switch, Redirect } from 'react-router-dom';


export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Footer />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/About" component={About} />
        <Route exact path="/Portfolio" component={Portfolio} />
      </Switch>
    </div>
  );
};
