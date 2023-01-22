import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ReviewEdit = ({onEditReview}) => {

  const [editedBody, setEditedBody] = useState("")

  const params = useParams()

  const handleEditSubmit = (e) => {
    e.preventDefault()
    
    fetch(`http://localhost:9292/reviews/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: editedBody,
        }),
      })
        .then((r) => r.json())
        .then((updatedData) => onEditReview(updatedData));
    }

  return (
    <div>
    
        <Box onSubmit={handleEditSubmit} component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off" >

      
            <TextField onChange={e => setEditedBody(e.target.value)} value={editedBody} id="standard-basic" label="Edit your review." variant="standard" />
            <br />
            <Button type="submit" variant="text">Submit</Button>
        

        </Box>
    
    </div>
  )
}

export default ReviewEdit