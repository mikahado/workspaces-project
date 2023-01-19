import React, { useState, useEffect } from 'react'
import Review from './Review'
import Service from './Service'
import ReviewAdd from './ReviewAdd'
import WorkspaceDialog from './WorkspaceDialog'

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

//dialog
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

import Grid from '@mui/material/Grid';


const WorkspaceCard = ({workspace, onDeleteReview, onAddReview}) => {


  // const [showReview, setShowReview] = useState(false)

    //dialog
    // const [open, setOpen] = useState(false);
    // const [scroll, setScroll] = useState('paper');

    const {id, title, address, reviews, services} = workspace
    
    const service = services.map(s => 
        <Service 
            key={s.id}
            service={s}
            />
        )

    // const review = reviews.map(r => 
    //     <Review 
    //         key={r.id}
    //         review={r}
    //         onDeleteReview={onDeleteReview}
    //         />
    //     )

    const allRatings = reviews.map(r => r.rating) 
    const ratingsAvg = allRatings.reduce((a,b) => a + b) / allRatings.length 

    //dialog box
    // const handleClickOpen = (scrollType) => () => {
    //     setOpen(true);
    //     setScroll(scrollType);
    //   };
    
    //   const handleClose = () => {
    //     setOpen(false);
    //   };
    
    //   const descriptionElementRef = React.useRef(null);
    //   React.useEffect(() => {
    //     if (open) {
    //       const { current: descriptionElement } = descriptionElementRef;
    //       if (descriptionElement !== null) {
    //         descriptionElement.focus();
    //       }
    //     }
    //   }, [open]);

      // const handleShowReviewClick = () => {
      //   setShowReview(!showReview)
      // }

  return (
    <div>

        <h2>{title}</h2>
        <p>[photo of workspace]</p>
        <p></p>
        {address}
        {service}
        <Rating name="read-only" value={Math.ceil(ratingsAvg)} readOnly />

        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
            >
        </Box>

        <WorkspaceDialog reviews={reviews} onAddReview={onAddReview} onDeleteReview={onDeleteReview} allRatings={allRatings}/>

        {/* <Button onClick={handleClickOpen('paper')}>{allRatings.length} reviews</Button>

        <Dialog
            open={open}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title">

              ~REVIEWS~
              
            </DialogTitle>
            <DialogContent dividers={scroll === 'paper'}>
            <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
            >
              <Button variant="outlined" onClick={handleShowReviewClick}>Write a Review</Button>
              <br />

              {showReview ? <ReviewAdd onAddReview={onAddReview} reviews={reviews} /> : null}

              <br />
              <hr />
              <hr />
              {/* This is where the error comes from */}
              {/* {review} */}

            {/* </DialogContentText>
            </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
        </Dialog>

    <Grid container sx={{ color: 'text.primary' }}>

    </Grid> */} 
        
    </div>
  )
}

export default WorkspaceCard