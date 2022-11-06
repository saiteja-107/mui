import React from 'react'
import {Box, Stack ,Divider ,Grid} from '@mui/material'
function Muistack() {
  return (
<Stack>

    <Stack spacing={2}  sx={{
        border:"solid 1px"
        ,width:"100px",
        height:"100px",
    }} direction="row"  >
    </Stack>
<Grid container margin={4}>
<Grid item><Box bgcolor="primary.light" p={2}>Item 1</Box></Grid>
<Grid item><Box bgcolor="primary.light" p={2}>Item 2</Box></Grid>
<Grid item><Box bgcolor="primary.light" p={2}>Item 3</Box></Grid>
<Grid item><Box bgcolor="primary.light" p={2}>Item 4</Box></Grid>
</Grid>


    </Stack>

  )
}

export default Muistack