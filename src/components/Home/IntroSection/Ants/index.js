import React from 'react'
import { Box } from '@mui/material'
import AntsSvg from './AntsSvg'
export default function Ants() {
  return (
    <Box sx={{position:'relative'}}>
    {/* <img src="/Ants.svg" className={styles.ants} alt="ants" style={{position:'absolute',top:0,left:0,zIndex:-1}} /> */}
    <AntsSvg   />
    </Box>
  )
}
