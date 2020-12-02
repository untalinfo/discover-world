import React from 'react';
import HomePage from '../containers/HomePage'
import Country from '../containers/Country'
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com/',
  cache: new InMemoryCache()
});


const App = () => (
  <>
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path='/home' component={ HomePage } />
        <Route exact path='/country' component={ Country } />
        <Redirect to='/home' />
      </Switch>
    </Router>
  </ApolloProvider>
  </>
)

export default App;
