import React from 'react'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Filter = () => {

  
  
  return (
    <div>
      <br/>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Filter by Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Resturaunt" control={<Radio />} label="Resturaunt" />
        <FormControlLabel value="Cafe" control={<Radio />} label="Cafe" />
        <FormControlLabel value="POPS" control={<Radio />} label="POPS" />
        <FormControlLabel value="Random Nook" control={<Radio />} label="Random Nook" />
        <FormControlLabel value="Museum" control={<Radio />} label="Museum" />
        <FormControlLabel value="Diner" control={<Radio />} label="Diner" />
        <FormControlLabel value="Hotel Lobby" control={<Radio />} label="Hotel Lobby" />
        
      </RadioGroup>
    </FormControl>



    </div>
  )
}

export default Filter