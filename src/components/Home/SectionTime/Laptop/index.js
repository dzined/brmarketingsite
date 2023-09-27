import React, { useEffect } from 'react'
import { Box,useTheme,useMediaQuery } from '@mui/material'
import { animate,inView,spring } from 'motion'
export default function Laptop() {
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  useEffect(() => {
    inView('#sectionTime2', (info) => {
      {isMobile ? animate('.time2',{opacity:[0,1],y:[-100,-1]},{duration:3,ease:'linear'}):
      animate('.time2',{x:[-500,-1]},{duration:2,ease:'linear'})}
// This will fire when the element leaves the viewport
      // return (leaveInfo) => {
      //   animate('.laptop',{x:[-1,-500]},{duration:2,ease:'linear'})
      //   console.log("leaveInfo",leaveInfo)
      // }

    })

  },[])

  return (
    <Box className="time2" sx={{position:{xs:'relative',sm:'absolute'},width:'100%',maxWidth:{xs:'100%',sm:600,md:600},left:{xs:0,sm:-100}}}>
    <Box component="img" src="/time-2.png" sx={{width:'100%'}} alt="Good Practice" />
    </Box>
  )
}
