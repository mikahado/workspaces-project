import React, { useState } from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ReviewAdd = ({onAddReview, reviews}) => {

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

    fetch('http://localhost:9292/reviews', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((r) => r.json())
      .then((newData) => {

      onAddReview(newData);
      });
  }

  const handleChangeReview = (e) => {
    setReview({...review, [e.target.name]: e.target.value})
  }

  const handleChangeRating = (e) => {
    setReview({...review, [e.target.name]: e.target.value})
  }
   
  return (
    <div className="App">
        <form onSubmit={handleReviewSubmit}>
          <br />
          
          {/* <input type="textarea" name="comment" value={review.comment} onChange={handleChangeReview} /> */}
          
          <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off" >

            <TextField name="comment" onChange={handleChangeReview} value={review.comment} id="standard-basic" label="Your Review" variant="standard" />
          
            </Box>

          <br /><br />
          <label>Rate</label>
          <div>          
            <label>1★<input type="radio" name="rating" value={1} onChange={handleChangeRating}/> &nbsp; </label>
            <label>2★<input type="radio" name="rating" value={2} onChange={handleChangeRating}/> &nbsp; </label>
            <label>3★<input type="radio" name="rating" value={3} onChange={handleChangeRating}/> &nbsp; </label>
            <label>4★<input type="radio" name="rating" value={4} onChange={handleChangeRating}/> &nbsp; </label>
            <label>5★<input type="radio" name="rating" value={5} onChange={handleChangeRating}/> &nbsp; </label>
          </div>
          <br />
          
          {/* <button type="submit">Submit</button> */}
          <Button type="submit" variant="contained">Submit</Button>

        </form>

    </div>
  )
}

export default ReviewAdd