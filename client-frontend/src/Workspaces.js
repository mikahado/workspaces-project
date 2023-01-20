import React, { useState, useEffect } from 'react'
import WorkspaceLink from './WorkspaceLink'

import WorkspaceCard from './WorkspaceCard'
import Filter from './Filter'
import Search from './Search'
import WorkspaceGrid from './WorkspaceGrid'


import Button from '@mui/material/Button';

const Workspaces = () => {

  const [workspaces, setWorkspaces] = useState([
  ])
  const [search, setSearch] = useState("")
  const [showFilter, setShowFilter] = useState(false)

  useEffect(() => {
    fetch("http://localhost:9292/workspaces")
    .then(r => r.json())
    .then((data => setWorkspaces(data)))
  }, [])

  const workspacesList = workspaces.map(w => <WorkspaceLink key={w.id} workspace={w} />)

  //pre-Noyes

  const filterBySearch = workspaces.filter(c => c.title.toLowerCase().includes(search.toLowerCase()))

  const workspaceCard = filterBySearch.map((w) => 
    <WorkspaceCard 
      key={w.id}
      workspace={w}
      // allReviews={allReviews}
      // allServices={allServices}
      // onDeleteReview={onDeleteReview}
      // onAddReview={onAddReview}
      // onUpdatedService={onUpdatedService}
      />)

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

        <div>
          <ul>
            {workspacesList}
          </ul>
          </div>



<hr />
<br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br />



        <h1 > WORKSPACES</h1>
        
        <Search handleSearchChange={handleSearchChange} />
    
        <Button onClick={handleFilterClick} variant="contained">{showFilter ? "Hide": "Filter"}</Button>
        {showFilter ? <Filter /> : null}

        <WorkspaceGrid workspaceCard={workspaceCard}/>

    </div>

  )
}

export default Workspaces