import React from 'react';

// Components
import Header from "./components/Header";

// Styles
import { GlobalStyle } from "./GlobalStyles";

const App = () => {
  return (
    <div className="app">
      <Header />
      Movie App
      <GlobalStyle />
    </div>
  )
}

export default App
