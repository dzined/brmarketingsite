import { Stack,Box } from '@mui/material'
import React, { useEffect } from 'react'
import { fadeInStagger } from '@/helpers/animation'
import { animate ,spring,inView,stagger,timeline} from "motion"
export default function PracticeBox() {
  useEffect(() => {

    // fadeInStagger('sectionProtect','.protectHuman',3)
  //  inView('sectionProtect', (info) => {

   const sequence=[
    [
        '.protectHuman',
        { opacity: [0,1], y: [-20,0]},
        { delay: stagger(0.10) },
        {duration:4},
        {easing: spring()}
    ],
    [
       '.purple',
        { background: ['rgba(255,255,255,0.1)','rgba(147,8,255,1)']},
        { duration: 2 }
    ]

  ]
    timeline(sequence, { repeat: 2 })
// })
  }, [])

  return (
    <>
    <Box sx={{background:'#2e2f50',overflow:'hidden',borderRadius:2,width:'100%',p:0,height:350}}>

    <Stack id="sectionProtect" direction="row" useFlexGap flexWrap="wrap" spacing={2} sx={{marginLeft:-2,marginTop:-2}}>
      <Box className="protectHuman" sx={{flexBasis:"20%", background:'rgba(255,255,255,0.1)',height:63,flexGrow: 1,borderRadius:2}} />
      <Box className="protectHuman" sx={{flexBasis:"20%",background:'rgba(255,255,255,0.1)',height:63,flexGrow: 1,borderRadius:2}} />
      <Box className="protectHuman" sx={{flexBasis:"20%",background:'rgba(255,255,255,0.1)',height:63,flexGrow: 1,borderRadius:2}} />
      <Box className="protectHuman" sx={{flexBasis:"20%",background:'rgba(255,255,255,0.1)',height:63,flexGrow: 1,borderRadius:2}} />
      <Box className="protectHuman" sx={{flexBasis:"20%",background:'rgba(255,255,255,0.1)',height:63,flexGrow: 1,borderRadius:2}} />
      <Box className="protectHuman purple" sx={{flexBasis:"20%",background:'rgba(255,255,255,0.1)',height:63,flexGrow: 1,borderRadius:2}} />
      <Box className="protectHuman purple" sx={{flexBasis:"20%",background:'rgba(255,255,255,0.1)',height:63,flexGrow: 1,borderRadius:2}} />
      <Box className="protectHuman" sx={{flexBasis:"20%",background:'rgba(255,255,255,0.1)',height:63,flexGrow: 1,borderRadius:2}} />
      <Box className="protectHuman" sx={{flexBasis:"20%",background:'rgba(255,255,255,0.1)',height:63,flexGrow: 1,borderRadius:2}} />
      <Box className="protectHuman purple" sx={{flexBasis:"20%",background:'rgba(255,255,255,0.1)',height:63,flexGrow: 1,borderRadius:2}} />
      <Box className="protectHuman purple" sx={{flexBasis:"20%",background:'rgba(255,255,255,0.1)',height:63,flexGrow: 1,borderRadius:2}} />
      <Box className="protectHuman" sx={{flexBasis:"20%",background:'rgba(255,255,255,0.1)',height:63,flexGrow: 1,borderRadius:2}} />
      <Box className="protectHuman " sx={{flexBasis:"20%",background:'rgba(255,255,255,0.1)',height:63,flexGrow: 1,borderRadius:2}} />
      <Box className="protectHuman  purple" sx={{flexBasis:"20%",background:'rgba(255,255,255,0.1)',height:63,flexGrow: 1,borderRadius:2}} />
      <Box className="protectHuman " sx={{flexBasis:"20%",background:'rgba(255,255,255,0.1)',height:63,flexGrow: 1,borderRadius:2}} />
      <Box className="protectHuman" sx={{flexBasis:"20%",background:'rgba(255,255,255,0.1)',height:63,flexGrow: 1,borderRadius:2}} />
      <Box className="protectHuman" sx={{flexBasis:"20%",background:'rgba(255,255,255,0.1)',height:63,flexGrow: 1,borderRadius:2}} />
      <Box className="protectHuman" sx={{flexBasis:"20%",background:'rgba(255,255,255,0.1)',height:63,flexGrow: 1,borderRadius:2}} />
      <Box className="protectHuman" sx={{flexBasis:"20%",background:'rgba(255,255,255,0.1)',height:63,flexGrow: 1,borderRadius:2}} />
      <Box className="protectHuman" sx={{flexBasis:"20%",background:'rgba(255,255,255,0.1)',height:63,flexGrow: 1,borderRadius:2}} />
      <Box className="protectHuman" sx={{flexBasis:"20%",background:'rgba(255,255,255,0.1)',height:63,flexGrow: 1,borderRadius:2}} />
      <Box className="protectHuman" sx={{flexBasis:"20%",background:'rgba(255,255,255,0.1)',height:63,flexGrow: 1,borderRadius:2}} />
      <Box className="protectHuman" sx={{flexBasis:"20%",background:'rgba(255,255,255,0.1)',height:63,flexGrow: 1,borderRadius:2}} />
      <Box className="protectHuman" sx={{flexBasis:"20%",background:'rgba(255,255,255,0.1)',height:63,flexGrow: 1,borderRadius:2}} />
    </Stack>
    </Box>
    </>
  )
}
