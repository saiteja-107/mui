import React ,{useState}from "react";
import { Box , FormControlLabel,Checkbox} from "@mui/material";
import {FormControl,FormLabel,FormGroup} from "@mui/material"
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
function CheckBox() {
    const [terms,setTerms]=useState(false);
    const [skills,setSkill]=useState<string[]>([])
    const  handleSkilllchange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        const index=skills.indexOf(event.target.value);
        if(index===-1){
            setSkill([... skills ,event.target.value])
        }
        else{
            setSkill(skills.filter((skills)=> skills!==event.target.value))
        }

    }
  return (
<Box>
    <Box>
        <FormControlLabel  label="I accept Terms and conditions " control={<Checkbox checked={terms}/>} onChange={()=>{
            setTerms(!terms);
        }}/>
    </Box>

    <Box>
<Checkbox icon={<BookmarkBorderIcon />} 
checkedIcon={<BookmarkIcon/> }
checked={terms}
onChange={()=>{setTerms(!terms);
}}
/>

    </Box>
    <Box>
        <FormControl>
            <FormLabel>
                <FormControlLabel  label="Html "  value="Html"control={<Checkbox checked={skills.includes('html')} />} onChange={()=>{
            setTerms(!terms);
        }}/>
        <FormControlLabel  label="Css "  value="Css"control={<Checkbox checked={skills.includes('css')} />} onChange={()=>{
            setTerms(!terms);
        }}/>
        <FormControlLabel  label="JavaScript " value="JavaScript" control={<Checkbox checked={skills.includes("javascript")}  />} onChange={()=>{
            setTerms(!terms);
        }}/>

            </FormLabel>

        </FormControl>
        
    </Box>

</Box>
  )
}

export default CheckBox