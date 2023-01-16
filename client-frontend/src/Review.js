import React from 'react'

const Review = ({review}) => {

  console.log(review.comment)
  
  return (

    <div>
      
      <br />

      {review.comment}
      <br />
      {review.created_at}
      <br />
      <br />

    </div>

  )
}


export default Review