import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Workspaces from './Workspaces'
import Navigation from './Navigation'

function App() {

  return (
    
  <Router> 
        <Navigation />  

      <div className="App">

        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/workspaces" element={<Workspaces />} /> 
        </Routes>
        
      </div>
     
  </Router>
  );
}

export default App;