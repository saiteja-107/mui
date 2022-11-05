import React ,{useState} from 'react'
import {Box ,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio, FormHelperText} from "@mui/material"


function RadioButton() {
const [value,setValue]=useState("");


  return (
    <Box>
        <FormControl  error >
                <FormLabel id="job-experience-group-label">
                 Year Experence
                </FormLabel>
                    <RadioGroup name="job-experience-group"
                    aria-labelledby='job-experience-group-label' value={value} row onChange={(event)=>{
                            setValue(event.target.value);
                    }}>
                         <FormControlLabel control={<Radio size='medium' color='secondary'/>} label='0-2' value="0-2"/>
                         <FormControlLabel control={<Radio/>} label='3-5' value="3-5"/>
                         <FormControlLabel control={<Radio/>} label='6-10' value="6-10"/>
                    </RadioGroup>
                    <FormHelperText  >Invalid Selection </FormHelperText>
        </FormControl>
    </Box>
    )
}

export default RadioButton