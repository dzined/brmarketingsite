import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { animate,inView,spring } from 'motion'
export default function RatingModel() {

  useEffect(() => {
    inView('#sectionTime', (info) => {
      console.log("ino",info)
      animate('.time',{opacity:[0,1]},{duration:3,ease:'linear'})
// This will fire when the element leaves the viewport
      return (leaveInfo) => {
        animate('.time',{opacity:[1,0]},{duration:2,ease:'linear'})
        console.log("leaveInfo",leaveInfo)
      }

    })

  },[])
console.log("LAPTDO")
  return (
    <Box className="time" sx={{position:'absolute',width:'100%',maxWidth:400,mt:5}}>
    <Box component="img" src="/time-1.png" sx={{width:'100%'}} alt="Good Practice" />
    </Box>
  )
}
