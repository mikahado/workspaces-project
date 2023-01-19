import React, { useEffect, useState } from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Review = ({review, onDeleteReview}) => {

  // const [reload, setReload] = useState("")

  const {id, rating, comment, workspace_id, updated_at} = review

  const handleDeleteClick = () => {
    fetch(`http://localhost:9292/reviews/${id}`, {
      method: "DELETE",
    })
      .then(() => onDeleteReview(id))
      // setReload("")
    }

  const handleUpdate = () => {
    // console.log("update!")
  }

  // let review_comment = ""

  // useEffect (() => {

  //   }, [reload] )

  // review_comment = `User${Math.floor(Math.random() * 100)}: ${comment}` 

  return (

    <div>
        <div>
        <em> {updated_at.slice(0, 10)}</em>
          </div>

              {/* {review_comment} */}
              <p>
              User_{Math.floor(Math.random() * 100)}: {comment}
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