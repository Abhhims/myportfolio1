import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import ContactForm from '../component/contactpage/ContactForm'

const Contact = () => {
  return (
    
<Grid container  width='80%' margin='200px'  justifyContent='center' flexDirection={'row'} alignItems={'center'} >


    <Stack><ContactForm></ContactForm></Stack>

</Grid>


   
  )
}

export default Contact