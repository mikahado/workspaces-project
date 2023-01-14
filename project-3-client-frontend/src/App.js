import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navigation from './Navigation'

function App() {

  return (
    
  <Router> 
    
        <Navigation />  
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} /> 
        </Routes>
        
      </div>
     
  </Router>
  );
}

export default App;