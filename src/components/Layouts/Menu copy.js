import React,{useState,useEffect,useRef} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Bars from '@/icons/Bars';
import {  Stack } from '@mui/material';
import Link from 'next/link';
import Cross from '@/icons/Cross';
import { animate } from 'motion';
const style = {
  position: 'absolute',
  top: '100px',
  left: '0%',
  width:'100%',
  height:'100vh',
  // transform: 'translate(-50%, -50%)',
zIndex:9999,
  bgcolor: 'primary.navyDark',

  boxShadow: 24,
  p: 4,
opacity:1
};

export default function Menu() {

  const handleClick = () => {
    animate('#refModal', {opacity: [0, 1],top:['100vh',0]}, {duration: 1});
  }
  const handleClose = () => {
      animate('#refModal', {opacity: [1,0],top:[0,'100vh']}, {duration: 1});
    }


  return (
<div>
      <Box  sx={{
        transition:'all 0.3s ease-in-out',
        '&:hover':{opacity:0.4},cursor:'pointer'}}
        onClick={handleClick}><Bars  /></Box>
      {/* {isVisible && */}
        {/* <div ref={modal}
          className="fadeInEl"

        > */}
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      > */}
        <Box id="refModal" sx={{
  position: 'absolute',
  top: '100px',
  left: '0%',
  width:'100%',
  height:'100vh',
  // transform: 'translate(-50%, -50%)',
zIndex:9999,
  bgcolor: 'primary.navyDark',

  boxShadow: 24,
  p: 4,
opacity:0
}}>
            <Cross onClick={handleClose} sx={{position:'absolute',top:20,right:20,fontSize:50}} />
            <Stack direction="column" spacing={2} alignItems="center" justifyContent="center" sx={{height:'100%'}}>
                <Link href="/" onClick={handleClose}>
                  <Typography sx={{fontWeight:200}}>Home</Typography>
                  </Link>
                  <Link href="/insurance" onClick={handleClose}>
                  <Typography sx={{fontWeight:200}}>Insurance</Typography>
                  </Link>
                  <Link href="/" onClick={handleClose}>
                  <Typography sx={{fontWeight:200}}>Risk Management</Typography>
</Link>
<Link href="/" onClick={handleClose}>
                  <Typography sx={{fontWeight:200}}>Our Partners</Typography>
                </Link>
            </Stack>
        </Box>
      {/* </Modal> */}
      {/* </div> */}
      {/* } */}

    </div>
  );
}