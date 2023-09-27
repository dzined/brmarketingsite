import React, { useEffect } from 'react'
import { Button } from '@mui/material'
import {inView,animate, stagger,spring} from 'motion'
export default function GradientButton({text,width=250}) {

 useEffect(() => {

  return inView('.gradientButton', (info) => {
    animate(
      '.gradientButton',
      { opacity: [0,1], y: [-20,0]},
      { delay: stagger(0.10) },
      {duration:4},
      {easing: spring()},
    )
    // return (leaveInfo) => {
    //   animate(elementName,
    //   { opacity: 0},
    //   )
    // }
  })


 },[])

  return (
    <Button sx={{width:width}} variant="contained" className="gradientButton">{text}</Button>
  )
}
