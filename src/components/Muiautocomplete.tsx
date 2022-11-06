import React from 'react'
import { useState } from 'react'
import { Stack , Autocomplete,TextField} from '@mui/material'
function Muiautocomplete() {
const skills=["Html"," Javascript","css","ja","tsx"]
const [value,setValue]=useState <any>(" ")
console.log(value)
  return (
    <Stack spacing={2} width="250px">
< Autocomplete options={skills} renderInput={(params)=><TextField  {...params} label="skills"/>}

value={value} onChange={(event:any,newValue:String)=>{setValue(newValue)}}
freeSolo
/>

    </Stack>
  )
}

export default Muiautocomplete