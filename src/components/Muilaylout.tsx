import React from 'react'
import { Box } from '@mui/material'
function Muilaylout() {
  return (
<Box component="span" sx={{
    BackgroundColor:"primary.main",
    color:"white",
    height:"100px",
    width:"100px",
    padding:"16px",
    '$:hover':{
        backgroundColor:"primary.light"
    }
}}>
Code evolution
</Box>
  )
}

export default Muilaylout;