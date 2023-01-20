import React from 'react'
import { Link } from 'react-router-dom'

const WorkspaceLink = ({workspace}) => {

  return (
    <div>
        
        <Link to={`/workspaces/${workspace.id}`} />
        {workspace.title}

    </div>
  )
}

export default WorkspaceLink