import React from 'react'

const Review = ({review}) => {

  console.log(review.comment)
  
  return (

    <div>
      <br />
      <p></p>
      {review.comment}
      <br />
      {review.created_at.slice(0, 10)}
      <br />
    </div>

  )
}


export default Review