import React, { useEffect, useState } from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const ReviewItem = ({review, onDeleteReview}) => {

  const {id, rating, comment, workspace_id, updated_at} = review



  const handleDeleteClick = () => {
      onDeleteReview(id)
    }

  return (

    <div>
          <hr />
              <p>
              <b>User_{Math.floor(Math.random() * 100)}</b> <em>({updated_at.slice(0, 10)})</em>: 
              </p>
              {comment}
              <br /><br />
              {rating} stars
              <br /><br />

            <div>
            <DeleteOutlineOutlinedIcon onClick={handleDeleteClick} />
            <ModeEditIcon />
       </div>
      <hr />

    </div>         

  )
}


export default ReviewItem