import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { animate,inView,spring } from 'motion'
export default function Laptop() {

  useEffect(() => {
    inView('#sectionTime', (info) => {
      console.log("ino",info)
      animate('.laptop',{x:[-500,-1]},{duration:2,ease:'linear'})
// This will fire when the element leaves the viewport
      return (leaveInfo) => {
        animate('.laptop',{x:[-1,-500]},{duration:2,ease:'linear'})
        console.log("leaveInfo",leaveInfo)
      }

    })

  },[])
console.log("LAPTDO")
  return (
    <Box className="laptop" sx={{position:'absolute',width:'100%',maxWidth:600,left:-100}}>
    <Box component="img" src="/time-2.png" sx={{width:'100%'}} alt="Good Practice" />
    </Box>
  )
}
