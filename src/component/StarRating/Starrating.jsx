import { Stack } from '@mui/material'
import React from 'react'
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
const Starrating = () => {
  return (
   <Stack>
    <div style={{display:'flex', flexDirection:'row',width:'200px'}}>
    {Array(5).fill(0).map((e,i)=>{
        return(
        <span key={i}><StarOutlineRoundedIcon></StarOutlineRoundedIcon></span>
       )
    })} </div>
   </Stack>
  )
}

export default Starrating