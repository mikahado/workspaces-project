import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Workspace from './Workspace'
import Workspaces from './Workspaces'

import Navigation from './Navigation'
import './App.css';

function App() {
  
  return (
    
  <Router> 
    <Navigation />  
      <div className="App">
        <Routes>
          <Route exact path="/" 
            element={<Home />} 
            /> 
          <Route exact path="/workspaces" 
            element={<Workspaces />} 
            /> 
          <Route path="/workspaces/:id" 
            element={<Workspace />} 
            />
        </Routes>
      </div>  
  </Router>
  );
}

export default App;