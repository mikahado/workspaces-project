import React from 'react'

const Review = ({review}) => {


  return (

    <div>
      <em> {review.created_at.slice(0, 10)}</em>
      <p>
      User{Math.floor(Math.random() * 100)}: {review.comment}
      </p>
      <hr />

    </div>

           

  )
}


export default Review