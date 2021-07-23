import React from 'react';
// Routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from "./components/Header";
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

// Context
import UserProvider from './context';

// Styles
import { GlobalStyle } from "./GlobalStyles";

const App = () => (
    <Router>
      <UserProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:movieId" component={Movie} />
          <Route path="/*" component={NotFound} />
        </Switch>
        <GlobalStyle />
      </UserProvider>
     
    </Router>
  );


export default App
