import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import ServiceItem from './ServiceItem'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button'

const WorkspaceCard = ({ workspace }) => {

    const {title, address, reviews, services} = workspace
     
    const service = services.map(s => 
      <ServiceItem 
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
          <br />

        <Link to={`/workspaces/${workspace.id}`}>
          <Button >{allRatings.length} reviews</Button>
        </Link>
        
    </div>
  )
}

export default WorkspaceCard