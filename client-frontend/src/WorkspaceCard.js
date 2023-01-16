import React, { useState } from 'react'
import Review from './Review'
import Service from './Service'

const WorkspaceCard = ({workspace}) => {

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
        <button onClick={handleReviewClick}>{ratings.length} reviews</button>
        {showReview ? review : null}
    </div>
  )
}

export default WorkspaceCard