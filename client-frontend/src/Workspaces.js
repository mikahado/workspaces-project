import React, { useState, useEffect } from 'react'
import WorkspaceCard from './WorkspaceCard'
import Filter from './Filter'
import Search from './Search'
import WorkspaceGrid from './WorkspaceGrid'

import Button from '@mui/material/Button';

const Workspaces = () => {

  const [workspaces, setWorkspaces] = useState([])
  const [search, setSearch] = useState("")
  const [showFilter, setShowFilter] = useState(false)

  useEffect(() => {
      fetch("http://localhost:9292/workspaces")
      .then(r => r.json())
      .then((data => setWorkspaces(data)))
  }, [])

  const filterBySearch = workspaces.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))

  const workspaceCard = filterBySearch.map((w) => 
    <WorkspaceCard 
      key={w.id}
      workspace={w}
      /> 
    )

    const handleFilterClick = () => {
      setShowFilter(!showFilter)
    }

    const handleSearchChange = (e) => {
      setSearch(e.target.value)
      console.log(search)
    }

  return (
    <div>
        <h2>Workspaces</h2>

        <Search handleSearchChange={handleSearchChange} />
    
        <Button onClick={handleFilterClick} variant="contained">{showFilter ? "Hide Filter": "Filter"}</Button>
        {showFilter ? <Filter /> : null}

        <WorkspaceGrid workspaceCard={workspaceCard}/>

    </div>

  )
}

export default Workspaces