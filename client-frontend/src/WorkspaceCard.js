import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import Service from './Service'
import Review from './ReviewItem'
import WorkspaceDialog from './WorkspaceDialog'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button'

const WorkspaceCard = ({workspace, onDeleteReview, onAddReview, onUpdatedService, allReviews}) => {

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

    // const review = reviews.map(r => 
    //   <Review 
    //       key={r.id}
    //       review={r}
    //       onDeleteReview={onDeleteReview}
          
    //       />
    //   )

    const allRatings = reviews.map(r => r.rating) 
    const ratingsAvg = allRatings.reduce((a,b) => a + b) / allRatings.length 

  return (
    <div>

        <h2>{title}</h2>
        <p>[photo of workspace]</p>
        {address}
        {service}
        
        <Rating name="read-only" value={Math.ceil(ratingsAvg)} readOnly />
          <br />

        <Link to={`/workspaces/${workspace.id}`}>
          <Button >{allRatings.length} reviews</Button>
        </Link>
{/* 
        <WorkspaceDialog 
          key={id}
          reviews={reviews} 
          // onAddReview={onAddReview} 
          // onDeleteReview={onDeleteReview}
          // allReviews={allReviews} 
          // allRatings={allRatings}
        /> */}
        
    </div>
  )
}

export default WorkspaceCard