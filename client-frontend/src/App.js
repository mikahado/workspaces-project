import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Workspaces from './Workspaces'
import Navigation from './Navigation'
import WorkspaceAdd from './WorkspaceAdd'

function App() {

  const [workspaces, setWorkspaces] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/workspaces")
    .then(r => r.json())
    .then((data => setWorkspaces(data)))
}, [])

  function handleAddWorkspace(newWorkspace) {
    setWorkspaces([...workspaces, newWorkspace]);
  }

  function handleDeleteWorkspace(id) {
    const updatedWorkspaces = workspaces.filter((w) => w.id !== id);
    setWorkspaces(updatedWorkspaces);
  }
  
  return (
    
  <Router> 
        <Navigation />  

      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route exact path="/workspaces" element={<Workspaces workspaces={workspaces} handleDeleteWorkspace={handleDeleteWorkspace}/>} /> 
          <Route exact path="/workspaces/add" element={<WorkspaceAdd onAddWorkspace={handleAddWorkspace} />} /> 
        </Routes>
        
      </div>
     
  </Router>
  );
}

export default App;