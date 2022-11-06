import React from 'react'
import { Box ,Paper } from '@mui/material'
function Muipaper() {
  return (
<Box>

<Paper sx={{
    padding:"32 px",
}} elevation={4}> 
    <Box sx={{
        width:"100px",
        height:"100px",
        padding:2,
    }}></Box>
</Paper>
</Box>
  )
}

export default Muipaper