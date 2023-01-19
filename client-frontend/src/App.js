import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Workspaces from './Workspaces'
import Navigation from './Navigation'
import './App.css';

function App() {

  const [workspaces, setWorkspaces] = useState([
  ])

    useEffect(() => {
      fetch("http://localhost:9292/workspaces")
      .then(r => r.json())
      .then((data => setWorkspaces(data)))
  }, [])


//the ADD and DELETE functions below do not locate the nested data in workspaces > reviews.
//perhaps create separate GET request to deal with all this review CRUD?

  const handleAddReview = (newReview) => {
    const newArray = [...workspaces, newReview]
    setWorkspaces(newArray)
  }

  const handleDeleteReview = (id) => {
    setWorkspaces(review => 
      review.filter(r => r.id !== id))
  }
  
  return (
    
  <Router> 
        <Navigation />  

      <div className="App">

        <Routes>
          <Route exact path="/" element={<Home />} /> 
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