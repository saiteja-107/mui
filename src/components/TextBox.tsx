import { Stack,TextField ,InputAdornment} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

function TextBox() {
  return (
    <Stack>
    <Stack direction ="row" spacing={2}>
        <TextField label="Name" variant="outlined" size="small" color="warning"/>
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard"/>

    </Stack>



<Stack direction="row" spacing={2}>
<TextField label="Name" variant="outlined" size="small" required  helperText="Do not write " type={"password"}/>
<TextField label="Read Only" variant="outlined" size="small" InputProps={{readOnly:true}}/>

</Stack>


<Stack direction="row" spacing={2}>
    <TextField label="Amount"  InputProps={{startAdornment:<InputAdornment position='start'> $</InputAdornment>}}   />
    < TextField  label="Search " InputProps={{startAdornment:<InputAdornment position="start"><SearchIcon />   </InputAdornment>}}/>
</Stack>


</Stack>
  )
}

export default TextBox