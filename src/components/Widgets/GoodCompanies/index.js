import { Typography,Box, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import {fadeIn,fadeInDown,fadeInUp} from '@/helpers/animation'
export default function GoodCompanies() {

  useEffect(() => {
    fadeInUp('gcic',3)
  }, [])

  return (

    <Stack sx={{background:'#FFF',py:8,pt:20,px:{xs:2,sm:0}}}>
    <Typography id="gcic" sx={{lineHeight:{xs:'1.2em',sm:'2em'},fontWeight:500,fontSize:{xs:28,sm:32},textAlign:'center'}} className="gradientText">Good companies in good company<sup>®</sup></Typography>
    </Stack>

  )
}
