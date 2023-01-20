import React, {useState, useEffect} from 'react'
import { json, useParams } from 'react-router-dom'
import Review from './Review'

const Workspace = () => {

    const [workspace, setWorkspace] = useState({
        reviews: []
    })

    const [reviewFormFlag, setReviewFormFlag] = useState(false)

    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/workspaces/${params.id}`)
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setWorkspace(data)
        })
    }, [])

    const addReview = (review) => {
        fetch(`http://localhost:9292/reviews`, {
            method: "POST",
            header: {

            },
            body: JSON.stringify({
                rating: review.rating,
                comment: review.comment,
                workspace_id: params.id
            })
        })
    }

    const reviews = workspace.reviews.map(w => 
        <Review key={w.id} review={w} /> 
        )


  return (

    <div>

        <h2>{workspace.title}</h2>
        <p>[photo of workspace]</p>
        {workspace.address}

        {reviews}

    </div>
  )
}

export default Workspace