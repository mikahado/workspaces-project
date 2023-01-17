import React, { useEffect } from 'react'

const ReviewAdd = () => {

    useEffect(() => {
        fetch("http://localhost:9292/workspaces")
        .then(r => r.json())
        .then((data => setWorkspaces(data)))
    }, [])
    
  return (
    <div>
        
        Add a review

    </div>
  )
}

export default ReviewAdd