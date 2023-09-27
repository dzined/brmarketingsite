import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Fade from '@mui/material/Fade';
import Bars from "@/icons/Bars";
import Cross from "@/icons/Cross";
import { Stack } from "@mui/material";
import Link from "next/link";
import {animate,inView,stagger,spring} from 'motion'
const style = {
  position: "absolute",
  top: 0,
  left: 0,
  width: '100%',
  bgcolor: "primary.navyDark",
  boxShadow: 5,
  p: 5,
height:'100%'

};

export default function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () =>{
    setOpen(true);
    setTimeout(() => {
      animate (
        '.menuLink',
        { opacity: [0,1], y: [-20,0]},
        { delay: stagger(0.10) },
        {duration:2,easing: spring()}
      )
    }, 300);
  }
  const handleClose = () => {


    animate (
      '.menuLink',
      { opacity: [1,0], y: [0,-20]},
      { delay: stagger(0.10) },
      {duration:2,easing: spring()}
    )
    setTimeout(() => {
      setOpen(false);
    }, 600);
  }


  return (
    <div>
 <Box  sx={{
        transition:'all 0.3s ease-in-out',
        '&:hover':{opacity:0.4},cursor:'pointer'}}
        onClick={handleOpen}><Bars  /></Box>      <Modal open={open} onClose={handleClose}>
        <Fade in={open}>
          <Box sx={style}>
          <Cross onClick={handleClose} sx={{position:'absolute',top:18,right:18,fontSize:25}} />

              <Stack direction="column" id="menuCase" spacing={2} alignItems="center" justifyContent="center" sx={{height:'100%'}}>
                <Link href="/" onClick={handleClose} className="menuLink" style={{opacity:0}}>
                  <Typography sx={{fontWeight:200,transition:'all 0.3s','&:hover':{opacity:0.6,transform:'scale(1.05)'}}}>Home</Typography>
                  </Link>

                  {/* <Link href="/insurance" onClick={handleClose} className="menuLink" style={{opacity:0}}>
                  <Typography sx={{fontWeight:200,transition:'all 0.3s','&:hover':{opacity:0.6,transform:'scale(1.05)'}}}>Insurance</Typography>
                  </Link>
                  <Link href="/" onClick={handleClose} className="menuLink" style={{opacity:0}}>
                  <Typography sx={{fontWeight:200,transition:'all 0.3s','&:hover':{opacity:0.6,transform:'scale(1.05)'}}}>Risk Management</Typography>
</Link> */}
<Link href="/partners" onClick={handleClose} className="menuLink" style={{opacity:0}}>
                  <Typography sx={{fontWeight:200,transition:'all 0.3s','&:hover':{opacity:0.6,transform:'scale(1.05)'}}}>Our Partners</Typography>
                </Link>
                <Link href="/" onClick={handleClose} className="menuLink" style={{opacity:0}}>
                  <Typography sx={{fontWeight:200,transition:'all 0.3s','&:hover':{opacity:0.6,transform:'scale(1.05)'}}}>Register your interest</Typography>
                  </Link>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
