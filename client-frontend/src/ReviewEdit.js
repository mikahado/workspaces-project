import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ReviewEdit = ({onSubmitEdit}) => {

  const [updatedReview, setUpdatedReview] = useState("")

  const handleChange = (e) => {
    setUpdatedReview(e.target.value);
  }
  
  const handleSubmitEdit = () => {
    console.log(updatedReview)
    onSubmitEdit(updatedReview)
  }

  return (
    <div>
        <br />
        <form onSubmit={handleSubmitEdit}>
            <input type="text" placeholder="Edit review" onChange={handleChange} value={updatedReview} />
            <br /><br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default ReviewEdit