import React, { useState } from 'react';
import HomePage from '../containers/HomePage';
import Country from '../containers/Country';
import {
    Redirect,
    Route,
    Switch,
    BrowserRouter as Router,
} from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://countries-274616.ew.r.appspot.com/',
    cache: new InMemoryCache(),
});

const App = () => {
    const [selectedCountry, setSelectedCountry] = useState({});

    return (
        <>
            <ApolloProvider client={client}>
                <Router>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={(props: any) => (
                                <HomePage
                                     {...props}
                                    setSelectedCountry={setSelectedCountry}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/country/:country"
                            component={(props: any) => (
                                <Country
                                    {...props}
                                    selectedCountry={selectedCountry}
                                />
                            )}
                        />
                        <Redirect to="/" />
                    </Switch>
                </Router>
            </ApolloProvider>
        </>
    );
};

export default App;

