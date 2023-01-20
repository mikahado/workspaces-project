import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Workspaces from './Workspaces'
import Navigation from './Navigation'
import './App.css';

function App() {

  const [workspaces, setWorkspaces] = useState([
  ])
  const [allReviews, setAllReviews] = useState([])
 
    useEffect(() => {
      fetch("http://localhost:9292/workspaces")
      .then(r => r.json())
      .then((data => setWorkspaces(data)))
  }, [])

    useEffect(() => {
      fetch("http://localhost:9292/reviews")
      .then(r => r.json())
      .then((data => setAllReviews(data)))
    }, [])

 
  const handleAddReview = (newReview) => {
    const addNewReview = [...allReviews, newReview]
    console.log(addNewReview)
    setAllReviews(addNewReview)
    // getData(workspaces)
  }

  const handleDeleteReview = (id) => {
    const updatedReviews = allReviews.filter(r => 
      r.id !== id)
    setAllReviews(updatedReviews)
      // setReload("")
  }

  const onUpdatedService = () => {
    
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