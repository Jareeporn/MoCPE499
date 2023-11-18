import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

//Content
import Home from './contents/Home';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
          <Home />
        
      </div>
    </Router>
  );
}

export default App;
