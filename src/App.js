import React from 'react';

// Components
import Header from "./components/Header";
import Home from './components/Home';

// Styles
import { GlobalStyle } from "./GlobalStyles";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  )
}

export default App
