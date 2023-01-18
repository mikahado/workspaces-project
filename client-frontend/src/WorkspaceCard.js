import React, { useState, useEffect } from 'react'
import Review from './Review'
import Service from './Service'
import ReviewAdd from './ReviewAdd'

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

//dialog
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Grid from '@mui/material/Grid';


const WorkspaceCard = ({workspace, onWorkspaceDelete, onAddReview}) => {

    //dialog
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');

    const {id, title, address, reviews, services} = workspace

    const service = services.map(s => 
        <Service 
            key={s.id}
            service={s}
            />
        )

    const review = reviews.map(r => 
        <Review 
            key={r.id}
            review={r}
            />
        )

    const ratings = reviews.map(r => r.rating) 
    const ratingsAvg = ratings.reduce((a,b) => a + b) / ratings.length 

    function handleDeleteClick() {
        fetch(`http://localhost:9292/workspaces/${id}`, {
          method: "DELETE",
        })
          .then(() => onWorkspaceDelete(id));
      }


    //dialog 
    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const descriptionElementRef = React.useRef(null);
      React.useEffect(() => {
        if (open) {
          const { current: descriptionElement } = descriptionElementRef;
          if (descriptionElement !== null) {
            descriptionElement.focus();
          }
        }
      }, [open]);

  return (
    <div>

        <h2>{title}</h2>
        <p>photo of workspace</p>
        {address}
        {service}
        <Rating name="read-only" value={Math.ceil(ratingsAvg)} readOnly />

        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
            >
        </Box>

        <Button onClick={handleClickOpen('paper')}>{ratings.length} reviews</Button>

        <Dialog
            open={open}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title">

              REVIEWS
              
              <br />
              <button >Write a Review</button>
              
              <ReviewAdd onAddReview={onAddReview} />



              </DialogTitle>
            <DialogContent dividers={scroll === 'paper'}>
            <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
            >

                {review}

            </DialogContentText>
            </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
        </Dialog>

        <Grid container sx={{ color: 'text.primary' }}>

            <Grid item xs={8}>
                <DeleteOutlinedIcon onClick={handleDeleteClick}/>
            </Grid>
        
        </Grid>

    </div>
  )
}

export default WorkspaceCard