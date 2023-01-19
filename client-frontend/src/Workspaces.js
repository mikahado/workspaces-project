import React, { useState } from 'react'
import WorkspaceCard from './WorkspaceCard'
import Filter from './Filter'
import Search from './Search'
import WorkspaceGrid from './WorkspaceGrid'

import Button from '@mui/material/Button';

const Workspaces = ({workspaces, onDeleteReview, onAddReview}) => {

  const [search, setSearch] = useState("")
  const [showFilter, setShowFilter] = useState(false)

  const filterBySearch = workspaces.filter(c => c.title.toLowerCase().includes(search.toLowerCase()))

  const workspaceCard = filterBySearch.map((w) => 
    <WorkspaceCard 
      key={w.id}
      workspace={w}
      onDeleteReview={onDeleteReview}
      onAddReview={onAddReview}
      /> 
    )

    const handleSearchChange = (e) => {
      setSearch(e.target.value)
    }
   
    const handleFilterClick = () => {
      setShowFilter(!showFilter)
    }

    const handleFilterChange = () => {
      
    }

  return (

    <div >
        <h1 > WORKSPACES</h1>
        
        <Search handleSearchChange={handleSearchChange} />
    
        <Button onClick={handleFilterClick} variant="contained">{showFilter ? "Hide": "Filter"}</Button>
        {showFilter ? <Filter /> : null}

        <WorkspaceGrid workspaceCard={workspaceCard}/>

    </div>

  )
}

export default Workspaces