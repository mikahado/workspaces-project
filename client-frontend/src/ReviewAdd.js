import React, { useState } from 'react'

const ReviewAdd = ({onAddReview}) => {

  const [review, setReview] = useState({
    rating: 3,
    comment: ""
  })

  console.log(review)

  const handleReviewSubmit = (e) => {
    e.preventDefault()

    // const newPost = {
    //   rating: review.rating,
    //   comment: review.comment
    // }

    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((r) => r.json())
      .then((newData) => {
        onAddReview(newData);
        setReview("");
      });
  }

  const handleChangeReview = (e) => {
    setReview({...review, [e.target.name]: e.target.value})
  }
   
  return (
    <div>
        <form onSubmit={handleReviewSubmit}>
          <input type="text" name="comment" value={review.comment} onChange={handleChangeReview} />

          <button type="submit">Submit</button>

        </form>

    </div>
  )
}

export default ReviewAdd