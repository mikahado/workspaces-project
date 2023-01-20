import React, { useState, useEffect } from 'react'
import Service from './Service'
import WorkspaceDialog from './WorkspaceDialog'

import Rating from '@mui/material/Rating';



const WorkspaceCard = ({workspace, onDeleteReview, onAddReview, onUpdatedService, allReviews, allServices}) => {
    
    

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
          has_wifi: hasWifi,
        }),
      })
        .then(r => r.json())
        .then((newData) => onUpdatedService(newData))
      }
   
    const service = services.map(s => 
      <Service 
          key={s.id}
          service={s}
          updateWifiClick={handleUpdateWifi}
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
          allReviews={allReviews} 
          allRatings={allRatings}
       
        />
        
    </div>
  )
}

export default WorkspaceCard