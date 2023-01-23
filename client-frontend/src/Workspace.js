import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ReviewItem from './ReviewItem'
import ReviewAdd from './ReviewAdd'
import Button from '@mui/material/Button';

const Workspace = () => {

    const [workspace, setWorkspace] = useState({
      reviews: [],
      services: []
    })

    const [showReview, setShowReview] = useState(false)

    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/workspaces/${params.id}`)
        .then(r => r.json())
        .then(data => {
            setWorkspace(data)
        })
    }, [])

    const handleDeleteReview = (id) => {
    fetch(`http://localhost:9292/reviews/${id}`, {
      method: "DELETE",
    })
      .then(() => onReviewDelete(id))
    }

    const onReviewDelete = (id) => {
      const updatedReviews = workspace.reviews.filter((w) => w.id !== id);
      setWorkspace({...workspace, reviews: updatedReviews});
    }

    const handleAddReview = (newReview) => {
    setWorkspace({...workspace, reviews: [...workspace.reviews, newReview]});
    }

    const reviewItems = workspace.reviews.map(w => 
      <ReviewItem 
          key={w.id} 
          review={w} 
          onDeleteReview={handleDeleteReview}  
          workspace_id={workspace.id} /> )

    const handleShowReviewClick = () => {
        setShowReview(!showReview)
      }

  return (

    <div>

        <h1>REVIEWS</h1>
        <p>for</p>
        <h2>{workspace.title}</h2>
        {workspace.address}
        <br />
        <br />
        <br />
        
        <Button variant="outlined" onClick={handleShowReviewClick}>Write a Review</Button>
              <br />

        {showReview ? <ReviewAdd key={workspace.id} onAddReview={handleAddReview} reviews={workspace.reviews} workspace_id={workspace.id} /> : null}
        <br />
        < hr />

        {reviewItems}

    </div>
  )
}

export default Workspace