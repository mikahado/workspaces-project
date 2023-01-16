import React, { useState, useEffect } from 'react'

const Workspaces = () => {

    const [workspaces, setWorkspaces] = useState([])

    console.log(workspaces)

    useEffect(() => {
        fetch("http://localhost:9292/workspaces")
        .then(r => r.json())
        .then((data => setWorkspaces(data)))
    }, [])

  return (
    <div>Workspaces
    </div>

  )
}

export default Workspaces