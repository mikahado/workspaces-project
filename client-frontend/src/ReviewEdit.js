import React, {useState} from 'react'

const ReviewEdit = ({onSubmitEdit}) => {

  const [updatedReview, setUpdatedReview] = useState("")

  const handleChange = (e) => {
    setUpdatedReview(e.target.value);
  }
  
  const handleSubmitEdit = () => {
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