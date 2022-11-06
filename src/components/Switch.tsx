import React from 'react'
import { useState } from 'react'
import {FormControl,Box,Switch,FormControlLabel} from "@mui/material"
function Switchmui() {

    const [checked,setChecked]=useState(false)

    const handleChange=()=>{
        setChecked(!checked)
    }
  return (
    <Box>
        <FormControlLabel label="Dark Mode" control={<Switch checked ={checked} onChange={handleChange} />}></FormControlLabel>
    </Box>
  )
}

export default Switch