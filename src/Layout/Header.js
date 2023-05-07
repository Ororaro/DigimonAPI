import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';

function DrawerAppBar() {
  return (
    <Box >
      <AppBar component="nav" sx={{backgroundColor:'#000'}} >
          <Box
            variant="h6"
            sx={{ display:'flex',justifyContent:'left',alignItems:'center' ,height:'50px',fontSize:'30px',paddingLeft:"10px"}}
          >
           <Link href='/' sx={{color:'#fff',textDecoration:'none'}}>DAPIAPI</Link> 
          </Box>
      </AppBar>
     
    </Box>
  );
}

export default DrawerAppBar;