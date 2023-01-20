import React, { useEffect, useState } from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Review = ({review, onDeleteReview}) => {

  // const [reload, setReload] = useState("")

  const {id, rating, comment, workspace_id, updated_at} = review


  const handleDeleteClick = () => {
      onDeleteReview(id)
    }

  // const handleUpdate = () => {
  //   //todo
  // }

  // let review_comment = ""

  // useEffect (() => {

  //   }, [reload] )

  // review_comment = `User${Math.floor(Math.random() * 100)}: ${comment}` 

  return (

    <div>
            <div>
          <hr />
          
          </div>

              {/* {review_comment} */}
              <p>
              <b>User_{Math.floor(Math.random() * 100)}</b> <em>({updated_at.slice(0, 10)})</em>: 
              </p>
              {comment}

          <div>
          <DeleteOutlineOutlinedIcon onClick={handleDeleteClick} />
          {/* <ModeEditIcon onClick={handleUpdate}/> */}
       </div>
      <hr />

    </div>         

  )
}


export default Review