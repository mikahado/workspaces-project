import React, { useState, useEffect } from 'react'

import WorkspaceCard from './WorkspaceCard'
import Filter from './Filter'
import Search from './Search'
import WorkspaceGrid from './WorkspaceGrid'

import Button from '@mui/material/Button';

const Workspaces = () => {

  const [workspaces, setWorkspaces] = useState([
  ])

  const [search, setSearch] = useState("")
  // const [showFilter, setShowFilter] = useState(false)
  // const [filteredWorkspaces, setFilteredWorkspaces] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/workspaces")
    .then(r => r.json())
    .then((data => {
      setWorkspaces(data)
    }
      ))
  }, [])

  // how do i get a search and a filter working on the same page?

  const filterBySearch = workspaces.filter(c => c.title.toLowerCase().includes(search.toLowerCase()))

  const workspaceCard = filterBySearch.map((w) => 
    <WorkspaceCard 
      key={w.id}
      workspace={w}
      />)  

    const handleSearchChange = (e) => {
      setSearch(e.target.value)
    }
   
    // const handleFilterClick = () => {
    //   setShowFilter(!showFilter)
    // }

    // const handleFilterChange = (kindOfPlace) => {
    //   setFilteredWorkspaces(workspaces.filter(w => w.services.some(s => s.kind_of_place === kindOfPlace)));
    // }

  return (

    <div >
        <br />
        <h1>≡🬀 WORKSPACES 🬀≡</h1>
        {/* <h3>-New York City-</h3> */}
        <br />        
        <Search handleSearchChange={handleSearchChange} />
    
        {/* <Button  onClick={handleFilterClick} variant="outlined"> */}
          
        {/* {showFilter ? "Hide": "Filter"}</Button>

        {showFilter ? <Filter handleFilterChange={handleFilterChange} /> : null} */}

        <WorkspaceGrid workspaceCard={workspaceCard}/>
    </div>

  )
}

export default Workspaces