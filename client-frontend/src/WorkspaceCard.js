import React, { useState, useEffect } from 'react'
import Service from './Service'
import WorkspaceDialog from './WorkspaceDialog'

import Rating from '@mui/material/Rating';



const WorkspaceCard = ({workspace, onDeleteReview, onAddReview, onUpdatedService}) => {
    
    

    const {id, title, address, reviews, services} = workspace

    const [hasWifi, setHasWifi] = useState(false)
   
    const handleUpdateWifi = () => {

      setHasWifi(!hasWifi)
  
      fetch(`http://localhost:9292/services/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          has_wifi: services.has_wifi,
        }),
      })
        .then(r => r.json())
        .then((updatedService) => onUpdatedService(updatedService))
      }

      console.log(hasWifi)
    

    const service = services.map(s => 
      <Service 
          key={s.id}
          service={s}
          handleUpdateWifi={handleUpdateWifi}
          />
        )

    const allRatings = reviews.map(r => r.rating) 
    const ratingsAvg = allRatings.reduce((a,b) => a + b) / allRatings.length 

   

  return (
    <div>

        <h2>{title}</h2>
        <p>[photo of workspace]</p>
        {address}
        {service}
        <Rating name="read-only" value={Math.ceil(ratingsAvg)} readOnly />

        <WorkspaceDialog 
          reviews={reviews} 
          onAddReview={onAddReview} 
          onDeleteReview={onDeleteReview} 
          allRatings={allRatings}
       
        />
        
    </div>
  )
}

export default WorkspaceCard