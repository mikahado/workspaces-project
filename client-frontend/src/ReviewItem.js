import React, { useState } from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ReviewEdit from './ReviewEdit'


const ReviewItem = ({review, onDeleteReview, onEditReview, workspace_id}) => {

  const [showEditor, setShowEditor] = useState(false)

  const {id, rating, comment, updated_at} = review 

  const handleEditClick = () => {
    setShowEditor(!showEditor)
  }

  const handleDeleteClick = () => {
      onDeleteReview(id)
    }

  return (

    <div>
          <hr />
              <p>
              <b>User_{Math.floor(Math.random() * 100)}</b> : 
              </p>
              {comment}
              <br /><br />
              {rating} stars
              <br /><br />

            <div>
            <DeleteOutlineOutlinedIcon onClick={handleDeleteClick} />
            <ModeEditIcon onClick={handleEditClick}/>

            {showEditor ? 

              <ReviewEdit key={id} workspace_id={workspace_id} onEditReview={onEditReview}/>
                  : null 
            }
    

       </div>
      <hr />

    </div>         

  )
}


export default ReviewItem