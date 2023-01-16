import React from 'react'

const Review = ({reviews}) => {

  const rating = reviews.map(r => r.rating)
  const comment = reviews.map(r => r.comment)
  
  return (

    <div>
      
      <p>{Math.ceil(ratingsAvg)}/4 stars</p>
      <button>{ratings.length} reviews</button>
      
    </div>

  )
}


export default Review