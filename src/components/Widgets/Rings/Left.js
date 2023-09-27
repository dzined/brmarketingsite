import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import {inView,animate, stagger,spring} from 'motion'

export default function RingsLeft() {

  useEffect(() => {
  return inView('.ringsLeft', (info) => {
console.log("asssd")
    animate(
      '.ringsLeft',
      { opacity: [0,1],top: ['50%','50%'],translateY: ['-50%','-50%'],scale: [1,1.1]},
      {duration:3},
      {easing: spring()},
    )
    // return (leaveInfo) => {
    //   animate(
    //     '.rings',
    //     { opacity: [1,0]},
    //     {duration:3},
    //     {easing: spring()},
    //   )
    // }
  })
  },[])

  return (
    <Box
  className="ringsLeft"
  sx={{
    position: 'absolute',zIndex:0,
    width:600,
    height:600,
    left: '-140px',
    top: '50%',
    transform: 'translateY(-50%)',
    }} component="img" src="https://storage.googleapis.com/brmedia/website/rings.png" />
  )
}
