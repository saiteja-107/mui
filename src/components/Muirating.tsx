import React, { useState } from 'react'
import { Stack,Rating} from '@mui/material'

function Muirating() {
    const [value,setValue]=useState<number | null>(null)
    console.log({value})
    const handelChange=(_event:React.ChangeEvent<{}>,newValue:number |null)=>{
        setValue(newValue)
    }
  return (
<Stack spacing={2}>
<Rating  value={value} onChange={handelChange} precision={0.5}/>

</Stack>


  )
}

export default Muirating