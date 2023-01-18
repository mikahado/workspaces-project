import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Workspaces from './Workspaces'
import Navigation from './Navigation'

function App() {

  const [workspaces, setWorkspaces] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/workspaces")
    .then(r => r.json())
    .then((data => setWorkspaces(data)))
}, [])

  function handleDeleteReview(id) {
    const updatedWorkspaces = workspaces.filter((w) => w.id !== id);
    setWorkspaces(updatedWorkspaces);
  }

  const handleAddReview = (newReview) => {
    setWorkspaces([...workspaces, newReview])
  }
  
  return (
    
  <Router> 
        <Navigation />  

      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route exact path="/workspaces" element={
            <Workspaces workspaces={workspaces} 
                onDeleteReview={handleDeleteReview}
                onAddReview={handleAddReview} />} /> 
        </Routes>
        
      </div>
     
  </Router>
  );
}

export default App;