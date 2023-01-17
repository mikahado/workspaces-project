import React, { useState } from 'react'
import Review from './Review'
import Service from './Service'

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


const WorkspaceCard = ({workspace}) => {

    const [value, setValue] = React.useState(2);
    const [showReview, setShowReview] = useState(false)

    const {name, address, reviews, services} = workspace

    const service = services.map(s => 
        <Service 
            key={s.id}
            service={s}
            />
        )

    const review = reviews.map(r => 
        <Review 
            key={r.id}
            review={r}
            />
        )

    const ratings = reviews.map(r => r.rating) 
    const ratingsAvg = ratings.reduce((a,b) => a + b) / ratings.length 

    const handleReviewClick = () => {
        setShowReview(!showReview)
    }

  return (
    <div>
        <h2>{name}</h2>
        <p>photo of workspace</p>
        {address}
        {service}
        <p>{Math.ceil(ratingsAvg)}/4 stars</p>

        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
            >

            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            />
        
        </Box>


        <button onClick={handleReviewClick}>{ratings.length} reviews</button>
        {showReview ? review : null}
    </div>
  )
}

export default WorkspaceCard