import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Workspaces from './Workspaces'
import Navigation from './Navigation'
import WorkspaceAdd from './WorkspaceAdd'

function App() {


  function handleAddWorkspace(newWorkspace) {
    setWorkspaces([...workspaces, newWorkspace]);
  }
  
  return (
    
  <Router> 
        <Navigation />  

      <div className="App">

        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/workspaces" element={<Workspaces />} /> 
          <Route exact path="/workspaces/add" element={<WorkspaceAdd onAddWorkspace={handleAddWorkspace} />} /> 
        </Routes>
        
      </div>
     
  </Router>
  );
}

export default App;