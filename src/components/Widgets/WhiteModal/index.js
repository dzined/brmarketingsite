import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import RegisterForm from '../RegisterForm';
import header from './StyledModal.module.css'
import { useTheme,Typography, Stack } from '@mui/material';
import Cross from '@/icons/Cross';
import Fade from '@mui/material/Fade';



export default function WhiteModal({name,logo,design}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const theme =useTheme();
  const style = {
    position: 'absolute',
    top: {xs:'0%',sm:'50%'},
    left: {xs:'0%',sm:'50%'},
    transform: {xs:'inherit',sm:'translate(-50%, -50%)'},
    width: {xs:'100%',sm:600},
    height: {xs:'100vh',sm:'inherit'},
    overflowY:'scroll',
    borderRadius:{xs:0,sm:3},
    bgcolor: '#fff',
    // border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: {xs:4,sm:4},
    pb: 3,
    // //soft electic glow
    //  boxShadow: '0 0 8px 2px #479ffe',
    //  //blue electic glow a bit wider
    //    boxShadow: '0 0 8px 2px #479ffe',
  };

  return (
    <div style={{position:'relative'}}>

     <Button onClick={handleOpen} variant="contained"  sx={{minWidth:200,lineHeight:1.2,fontSize:11,textTransform:'none',fontWeight:400}}>About {name}</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      ><Fade in={open}>
        <Box sx={{ ...style,maxWidth:800,p:8,py:4 }}>
        <Cross sx={{position:'absolute',color:'#000',top:20,right:20}} onClick={handleClose} />
            <Stack direction="row" alignItems="center">
                <Box component="img" sx={{width:'100%',maxWidth:200}} src={logo} />
                <Typography variant="body1" sx={{lineHeight:'1.0em'}}>{name}</Typography>
            </Stack>
            <Box sx={{mt:2}}>
            {design}
            </Box>
        </Box>
        </Fade>
      </Modal>
    </div>
  );
}