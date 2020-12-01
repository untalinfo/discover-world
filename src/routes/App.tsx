import React from 'react';
import HomePage from '../containers/HomePage'
import Country from '../containers/Country'
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom'


const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path='/home' component={ HomePage } />
        <Route exact path='/country' component={ Country } />
        <Redirect to='/home' />
      </Switch>
    </Router>
  </>
)

export default App;
