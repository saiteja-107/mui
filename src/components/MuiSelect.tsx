import { Box  } from "@mui/system"
import { TextField ,MenuItem} from "@mui/material"
export default function () {
  return (
    <Box width="250px">
        <TextField label="Select Country" select fullWidth SelectProps={{multiple:true}}>
         <MenuItem value="IN">India</MenuItem>
         <MenuItem value="US">US</MenuItem>
         <MenuItem value="Russia">Russia</MenuItem>

        </TextField>
    </Box>
  )
}
