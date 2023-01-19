// FOR FUTURE USE

// import React, {useState} from 'react'

// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';

// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// const WorkspaceAdd = ({onAddWorkspace}) => {

//   const [addWorkspace, setAddWorkspace] = useState({
//     title: "",
//     address: "",
//     services: {
//       kind_of_place: "",
//     },
//     reviews: {
//       rating: 3,
//     }
//   })

//   function handleSubmit(e) {
//     e.preventDefault()

//     const newWorkspace = {
//       title: addWorkspace.title,
//       address: addWorkspace.address,
//       services: {
//         kind_of_place: addWorkspace.services.kind_of_place 
//       },
//       reviews: {
//         rating: addWorkspace.reviews.rating
//       }
//     }

//     fetch("http://localhost:9292/workspaces", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newWorkspace),
//     })
//       .then((r) => r.json())
//       .then((newData) => {
//         onAddWorkspace(newData);
//         // setAddWorkspace("");
//       });
//   }

//   const handleSelectChange = (e) => {
//     setAddWorkspace({
//       ...addWorkspace, 
//         services: {
//           ...addWorkspace.services,
//             [e.target.name]: e.target.value
//           }
//     });
//   }

//   const handleChange = (e) => {
//     setAddWorkspace({
//     ...addWorkspace, [e.target.name]: e.target.value
//     })
//   }

//   console.log(addWorkspace)

//   return (

//     <div>
        
//       <form onSubmit={handleSubmit}>
//         Name: 
//           <input
//           type="text"
//           name="title"
//           autoComplete="off"
//           value={addWorkspace.title}
//           onChange={handleChange}
//         />
//         <br />
//         <br />
//         Address: 
//           <input
//           type="text"
//           name="address"
//           autoComplete="off"
//           value={addWorkspace.address}
//           onChange={handleChange}
//         />
//         <br />
//         <br />

//         <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
//           <InputLabel id="demo-select-small">Type</InputLabel>
//           <Select
//             labelId="demo-select-small"
//             id="demo-select-small"
//             value={''}
//             name="kind_of_place"
//             label="kind_of_place"
//             onChange={handleSelectChange}
//           >
//             <MenuItem value={"Hotel Lobby"}>Hotel Lobby</MenuItem>
//             <MenuItem value={"Cafe"}>Cafe</MenuItem>
//             <MenuItem value={"Library"}>Library</MenuItem>
//           </Select>
//         </FormControl>


//         <Box sx={{ '& > legend': { mt: 2 }, }} >
//       <Typography component="legend">Rating:</Typography>
//       <Rating
//         name="simple-controlled"
//         value={''}
//         onChange={(event, newValue) => {
//           setAddWorkspace(newValue);
//         }}
//       />
//     </Box>  

    
//     <br />

//       <button type="submit">Submit</button>

//     </form>


//     </div>
  
//     )
// }

// export default WorkspaceAdd