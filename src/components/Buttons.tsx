
import { Button ,Stack ,IconButton,ButtonGroup,ToggleButton,ToggleButtonGroup} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import { useState } from 'react';
function Buttons() {
  const [formats,setFormats]=useState("")
  return (
    <Stack spacing ={4}>
<Stack spacing={2} direction='row'>
    <Button variant='contained' color='primary'>Primary </Button>
    <Button variant='contained' color='secondary'>Secondary  </Button>
    <Button variant='contained' color='error'>Error </Button>
    <Button variant='contained' color='warning'>warning </Button>
    <Button variant='contained' color='success'>Success </Button>
    <Button variant='contained' color='info'>Info </Button>
</Stack>

  <Stack spacing={2} direction='row'> 

<Button variant='text' href='https://www.youtube.com'> Text 1</Button>
<Button variant='contained'> Contained</Button>
<Button variant='outlined'> outlined 1</Button>
</Stack>

<Stack spacing={2} display='block' direction="row">
  <Button variant='contained' size="small" >Small</Button>
  <Button variant='contained' size="medium">Medium</Button>
  <Button variant='contained' size="large" >Large</Button>

</Stack>
 
<Stack direction="row" spacing={2}>
<Button startIcon={<SendIcon/>} variant="contained" size='large'> Send </Button>
<Button endIcon={<SendIcon/>} variant="contained" size='large' onClick={()=>{alert("Hello")}} > Send </Button>

<IconButton aria-label='send' color='success' size='small'>
  <SendIcon />
</IconButton>
</Stack>

<Stack direction={"row"} >
  <ButtonGroup variant='contained' orientation='vertical'  color='primary' size='small' aria-label='Success'>
    <Button  >Left</Button>
    <Button  > Center</Button>
    <Button  >Right</Button>
    </ButtonGroup>
</Stack>

<Stack spacing={2} direction='row'>

    <ToggleButtonGroup aria-label='Toggle' value={formats} >

      <ToggleButton value="Bold" size ="small" color="primary" ><FormatBoldIcon /></ToggleButton>
      <ToggleButton value="Italic"><FormatItalicIcon /></ToggleButton>
      <ToggleButton value="UnderLine"><FormatUnderlinedIcon /></ToggleButton>

    </ToggleButtonGroup>


</Stack>



</Stack>

  )
  
}

export default Buttons;



