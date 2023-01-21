import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Review from './Review'
import ReviewAdd from './ReviewAdd'
import Button from '@mui/material/Button';

const Workspace = () => {

    const [workspace, setWorkspace] = useState({
        reviews: []
    })

       //it is ALL ABOUT THE ID
  
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
        //below line should be passed to parent, or update state in this component 
        setWorkspace(updatedReviews);
        }

     const handleAddReview = (newReview) => {
        const addNewReview = [...workspace.reviews, newReview]
        console.log(addNewReview)
        setWorkspace(addNewReview)
        }

    const reviewItems = workspace.reviews.map(w => 
        <Review key={w.id} review={w} onDeleteReview={handleDeleteReview}/> )


    const handleShowReviewClick = ({onAddReview}) => {
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

        {showReview ? <ReviewAdd onAddReview={handleAddReview} reviews={workspace.reviews} /> : null}
        <br />
        < hr />
        {reviewItems}

    </div>
  )
}

export default Workspace