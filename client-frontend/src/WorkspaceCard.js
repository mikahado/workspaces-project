import React, { useState, useEffect } from 'react'
import Service from './Service'
import WorkspaceDialog from './WorkspaceDialog'

import Rating from '@mui/material/Rating';



const WorkspaceCard = ({workspace, onDeleteReview, onAddReview}) => {

    const {id, title, address, reviews, services} = workspace
    
    const service = services.map(s => 
        <Service 
            key={s.id}
            service={s}
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