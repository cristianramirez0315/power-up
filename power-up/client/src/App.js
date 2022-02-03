import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import '../src/index.scss';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
// Components of the page
import Header from './components/Header';
import Homepage from './components/homepage';
import Footer from './components/footer';
import Login from '../src/pages/login';
import Signup from '../src/pages/signup';
import Powerupapp from '../src/pages/powerupapp';

//Page Components

//Sign Up


//Login In

//Power-Up App Logged in Page
const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/powerupapp" component={Powerupapp} />
              </Switch>
            </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
