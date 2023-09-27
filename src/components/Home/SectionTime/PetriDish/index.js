import React, { useEffect } from 'react'
import { animate ,spring,inView,stagger,timeline} from "motion"
import Circle from '@/icons/Circle'
import { Box } from '@mui/material'

export default function PetriDish() {
useEffect(() => {

  inView('#sectionTime3', (info) => {
  const sequence=[
      [
          '.outer',
          {scale:[0,1]},
          {duration:1.2},
          {easing: spring()}
      ],
      [
        '.inner',
        {scale:[0,1]},
        {duration:1.2},
        {easing: spring()}
      ],
      ['.blobs',
        {scale:[0,1]},

        { duration:4, delay: stagger(2, { from: "last",easing: spring }) },

      ]
  ]
  timeline(sequence, { repeat: 1})
})
},[])
  return (
    <Box sx={{position:'relative',width:{xs:300,sm:400},height:{xs:300,sm:400}}}>


        <Box className="outer" sx={{position:'absolute',top:0,left:0,width:'90%',height:'90%',background:'#242158',borderRadius:'50%'}} />
        <Box className="inner" sx={{position:'absolute',top:'20%',left:'8%',width:'50%',height:'50%',background:'#0c0a2e',borderRadius:'50%'}} />

        <Box className="blobs" sx={{position:'absolute',top:'26%',left:'18%',width:'18%',height:'18%',background:'#9020f5',borderRadius:'50%'}} />

        <Box className="blobs" sx={{position:'absolute',top:'35%',left:'39%',width:'10%',height:'10%',background:'#9020f5',borderRadius:'50%'}} />

        <Box className="blobs" sx={{position:'absolute',top:'45%',left:'15%',width:'7%',height:'7%',background:'#9020f5',borderRadius:'50%'}} />

        <Box className="blobs gradientBackground" sx={{position:'absolute',top:'26%',left:'38%',width:'7%',height:'7%',borderRadius:'50%'}} />
        <Box className="blobs" sx={{position:'absolute',top:'44%',left:'28%',width:'10%',height:'10%',background:'#0CDEFF',borderRadius:'50%'}} />
        <Box className="blobs gradientBackground" sx={{position:'absolute',top:'52%',left:'18%',width:'15%',height:'15%',borderRadius:'50%'}} />
        <Box className="blobs" sx={{position:'absolute',top:'50%',left:'40%',width:'6%',height:'6%',background:'#0CDEFF',borderRadius:'50%'}} />
        {/* <Box className="blobs" sx={{position:'absolute',top:0,left:'25%',width:'100%',height:'100%',background:'#9020f5)',borderRadius:'50%',zIndex:99999}} />
        <Box className="blobs" sx={{position:'absolute',top:0,left:'25%',width:'100%',height:'100%',background:'#9020f5)',borderRadius:'50%',zIndex:99999}} /> */}
        {/*

        <Box className="inner" sx={{position:'absolute',top:0,left:0,width:300,height:300,background:'#67dffb',borderRadius:'50%'}} />

        <Box className="inner gradientBackground" sx={{position:'absolute',top:0,left:0,width:300,height:300,borderRadius:'50%'}} />

        <Box className="blobs" sx={{position:'absolute',top:0,left:0,width:100,height:100,background:'#9020f5',borderRadius:'50%'}} /> */}

    </Box>
  )
}
