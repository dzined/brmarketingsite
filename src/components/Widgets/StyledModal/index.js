import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import RegisterForm from '../RegisterForm';
import header from './StyledModal.module.css'
import { useTheme,Typography } from '@mui/material';
import Cross from '@/icons/Cross';

import Fade from '@mui/material/Fade';


export default function StyledModal() {
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
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    borderRadius:3,
    bgcolor: theme.palette.primary.navy,
    // border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    //soft electic glow
     boxShadow: '0 0 8px 2px #479ffe',
     //blue electic glow a bit wider
       boxShadow: '0 0 8px 2px #479ffe',
  };

  return (
    <div style={{position:'relative'}}>

     <Button onClick={handleOpen} className={header.buttonReverse}>Register your interest</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      ><Fade in={open}>
        <Box sx={{ ...style,maxWidth:500,p:8,py:4 }}>
        <Cross sx={{position:'absolute',color:'#FFF',top:20,right:20}} onClick={handleClose} />
            <Typography variant="h3" sx={{color:'#FFF',mb:4,mt:0}}>Register your interest</Typography>
            <Typography variant="body1" sx={{color:'#FFF',mb:4,fontSize:14}}>
            If you&apos;d like to explore the benefits BareRock can bring but still have time on your current policy, <strong>we can remind you nearer your renewal</strong>. Simply let us know your details and we&apos;ll get in touch when the time&apos;s right.

            </Typography>
            <RegisterForm />
        </Box>
        </Fade>
      </Modal>
    </div>
  );
}