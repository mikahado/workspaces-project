import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ReviewEdit = ({onSubmitClick}) => {

  const [updatedReview, setUpdatedReview] = useState("")

  const handleChange = (e) => {
    setUpdatedReview(e.target.value);
  }
  
  const handleSubmit = () => {
    console.log(updatedReview)
    onSubmitClick(updatedReview)
  }

  return (
    <div>
        <br />
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Edit review" onChange={handleChange} value={updatedReview} />
            <br /><br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default ReviewEdit