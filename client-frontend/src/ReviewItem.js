import React, { useState } from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ReviewEdit from './ReviewEdit'


const ReviewItem = ({review, onDeleteReview}) => {

  const [showEditor, setShowEditor] = useState(false)

  const {id, rating, comment} = review 

  const handleShowEditor = () => {
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
            <ModeEditIcon />

            <ReviewEdit />
            

            {/* {showEditor ? 

              <ReviewEdit onEditSubmit={onEditSubmit}/>
                  : null 
            }
     */}

       </div>
      <hr />

    </div>         

  )
}


export default ReviewItem