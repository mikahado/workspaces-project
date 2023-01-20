import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Workspace from './Workspace'
import Workspaces from './Workspaces'
import Review from './Review'
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

  // const [workspaces, setWorkspaces] = useState([
  // ])
  // const [allReviews, setAllReviews] = useState([])
  // const [allServices, setAllServices] = useState([])
 
  //   useEffect(() => {
  //     fetch("http://localhost:9292/workspaces")
  //     .then(r => r.json())
  //     .then((data => setWorkspaces(data)))
  // }, [])

    // useEffect(() => {
    //   fetch("http://localhost:9292/reviews")
    //   .then(r => r.json())
    //   .then((data => setAllReviews(data)))
    // }, [])

    // useEffect(() => {
    //   fetch("http://localhost:9292/services")
    //   .then(r => r.json())
    //   .then((data => setAllServices(data)))
    // }, [])

 
  // const handleAddReview = (newReview) => {
  //   const addNewReview = [...allReviews, newReview]
  //   console.log(addNewReview)
  //   setAllReviews(addNewReview)
  // }

  // const handleDeleteReview = (id) => {
  //   const updatedReviews = allReviews.filter(r => 
  //     r.id !== id)
  //   setAllReviews(updatedReviews)
  // }

  // const handleUpdatedWifi = (updatedObj) => {
  //   const updatedWifi = allServices.map(s => {
  //     if (s.id === updatedObj.id) {
  //       return updatedObj;
  //     } else {
  //       return s;
  //     }
  //   });
  //   setAllServices(updatedWifi);
  // }
  
  return (
    
  <Router> 
        <Navigation />  

      <div className="App">

        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/workspaces" element={
              <Workspaces 
                          workspaces={workspaces}
                          // allReviews={allReviews} 
                          // allServices={allServices}
                          // onDeleteReview={handleDeleteReview}
                          // onAddReview={handleAddReview} 
                          // onUpdatedService={handleUpdatedWifi}
                          />} 
                          /> 
          <Route path="/workspaces/:id" element={<Workspace setWorkspaces={setWorkspaces}/>} />
        </Routes>
      </div>
     
  </Router>
  );
}

export default App;