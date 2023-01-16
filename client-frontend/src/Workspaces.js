import React, { useState, useEffect } from 'react'
import WorkspaceCard from './WorkspaceCard'

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const Workspaces = () => {

  const [workspaces, setWorkspaces] = useState([])

  useEffect(() => {
      fetch("http://localhost:9292/workspaces")
      .then(r => r.json())
      .then((data => setWorkspaces(data)))
  }, [])

const workspaceCard = workspaces.map(w => {
  <WorkspaceCard 
    key = {w.title}
    workspace = {w}
    /> 
})

  return (
    <div>
        <h1>Workspaces Grid</h1>

        <br /> <br />

        <Box>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(6)).map((_, index) => (
                <Grid xs={2} sm={4} md={4} key={index}>
                    <Item>Workspace Card Component Here</Item>
                </Grid>
            ))}
            </Grid>
        </Box>


    </div>

  )
}

export default Workspaces