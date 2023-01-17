import React, { useState, useEffect } from 'react'
import WorkspaceCard from './WorkspaceCard'

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#90EE90' : '#F8F8FF',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));


const Workspaces = () => {

  const [workspaces, setWorkspaces] = useState([])
  // const [search, setSearch] = useState("")


  useEffect(() => {
      fetch("http://localhost:9292/workspaces")
      .then(r => r.json())
      .then((data => setWorkspaces(data)))
  }, [])

  // const filterBySearch = workspaces.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))

  const workspaceCard = workspaces.map((w) => 
    <WorkspaceCard 
      key={w.id}
      workspace={w}
      /> 
    )

  return (
    <div>
        <h2>Workspaces</h2>

    <Box sx={{ margin: 2, flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

        {Array.from(Array).map((_, index) => (
          workspaceCard.map(w => 
            <Grid xs={2} sm={4} md={4} key={index}>
            <Item>{w}</Item>
          </Grid>)
        ))}

      </Grid>
    </Box>


    </div>

  )
}

export default Workspaces