import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import "./Project.css"
const Project = () => {
  return (
    <>
   
        <Grid container border='2px solid black' width='80%' margin='200px' flexDirection={'column'}>

            <Grid item><Stack> <span className="aboutheadder">Projects</span></Stack></Grid>
            <Grid item sx={{marginBottom:'32px'}}><Stack> <span className='address'>Each project is a unique piece of development</span></Stack></Grid>
            <Grid bgcolor={'red'} height='300px' item></Grid>
            <Grid bgcolor={'red'} height='300px' item></Grid>
            <Grid bgcolor={'red'} height='300px' item></Grid>
            <Grid> </Grid>
        </Grid>
    </>
  )
}

export default Project