import React from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Review = ({review, onDeleteReview}) => {

  const {id, rating, comment, workspace_id, updated_at} = review


  const handleDeleteClick = () => {
    fetch(`http://localhost:9292/reviews/${id}`, {
      method: "DELETE",
    })
      .then(() => onDeleteReview(id))
  }

  const handleUpdate = () => {
    // console.log("update!")
  }

  return (

    <div>
        <div>
        <em> {updated_at.slice(0, 10)}</em>
        </div>
        <p>
        User{Math.floor(Math.random() * 100)}: {comment}
        </p>
        <div>
          <DeleteOutlineOutlinedIcon onClick={handleDeleteClick} />
          <ModeEditIcon onClick={handleUpdate}/>
       </div>
      <hr />

    </div>         

  )
}


export default Review