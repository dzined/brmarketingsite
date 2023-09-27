import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { animate,inView,spring } from 'motion'
export default function RatingModel() {

  useEffect(() => {
    inView('#sectionTime1', (info) => {
      console.log("ino",info)
      animate('.time1',{opacity:[0,1]},{duration:3,ease:'linear'})
// This will fire when the element leaves the viewport
      // return (leaveInfo) => {
      //   animate('.time',{opacity:[1,0]},{duration:2,ease:'linear'})
      //   console.log("leaveInfo",leaveInfo)
      // }

    })

  },[])
  return (
    <Box className="time1" sx={{width:'100%',maxWidth:{xs:'100%',sm:400},mt:{xs:0,sm:5}}}>
    <Box component="img" src="/time-1.png" sx={{width:'100%'}} alt="Good Practice" />
    </Box>
  )
}
