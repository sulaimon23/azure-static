import 'bulma/css/bulma.css';
import React, { Component, lazy, Suspense } from 'react';
import { withRouter } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from './About';
import { HeaderBar, NavBar, NotFound } from './components';
import './styles.scss';

const Products = withRouter(
  lazy(() => import(/* webpackChunkName: "products" */ './products/Products')),
);

class App extends Component {
  //
  render() {
    return (
      <div>
        <HeaderBar />
        <div className="section columns">
          <NavBar />
          <main className="column">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Redirect from="/" exact to="/products" />
                <Route path="/products" component={Products} />
                <Route path="/about" component={About} />
                <Route exact path="**" component={NotFound} />
              </Switch>
            </Suspense>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
