import React, { useState } from 'react'

const ReviewAdd = ({onAddReview, reviews}) => {

  //line 6 returns undefined
  //const {workspace_id} = reviews

  //line 8 works
  const workspace_id = reviews.map(r => r.workspace_id)[0]
  
  const [review, setReview] = useState({
    rating: 3,
    comment: "",
    workspace_id: workspace_id
  })
  
  const handleReviewSubmit = (e) => {
    e.preventDefault()

    const newReview = {
      rating: review.rating,
      comment: review.comment,
      workspace_id: review.workspace_id
    }

    fetch(`http://localhost:9292/reviews/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((r) => r.json())
      .then((newData) => {
        onAddReview(newData);
        setReview({comment: ""});
      });
  }

  const handleChangeReview = (e) => {
    setReview({...review, [e.target.name]: e.target.value})
  }

  const handleChangeRating = (e) => {
    setReview({...review, [e.target.name]: e.target.value})
  }
   
  return (
    <div>
        <form onSubmit={handleReviewSubmit}>
          <input type="text" name="comment" value={review.comment} onChange={handleChangeReview} />
          <div>
            Your Rating: 
            <label> 1<input type="radio" name="rating" value={1} onChange={handleChangeRating}/> | </label>
            <label>2<input type="radio" name="rating" value={2} onChange={handleChangeRating}/> | </label>
            <label>3<input type="radio" name="rating" value={3} onChange={handleChangeRating}/> | </label>
            <label>4<input type="radio" name="rating" value={4} onChange={handleChangeRating}/> | </label>
            <label>5<input type="radio" name="rating" value={5} onChange={handleChangeRating}/> | </label>
          </div>
          
          <button type="submit">Submit</button>

        </form>

    </div>
  )
}

export default ReviewAdd