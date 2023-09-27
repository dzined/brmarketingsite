import React, { useEffect } from 'react'
import { Box, Stack, Typography,useTheme,useMediaQuery } from '@mui/material'
import CircleCheck from 'src/assets/icons/CircleCheck'
import GradientButton from '@/components/Widgets/GradientButton'
import {animate,inView} from 'motion'

export default function SectionBody({pageText,textLinks}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));
  useEffect(() => {
    inView(pageText.id, (info) => {
      animate(pageText.id,{opacity:[0,1],y:[-20,0]},{duration:2,ease:'linear'})
      // return (leaveInfo) => {
      //    animate('.fadeInUp',{opacity:[1,0],y:[0,-20]},{duration:2,ease:'linear'})
      // }

    })
  },[])
  return (
    <Stack className={pageText.id} direction="column" alignItems={{xs:'flex-start'}}>
    {isMobile ?
      <Stack direction="column" alignItems="flex-start" justifyContent="flex-start" spacing={1} sx={{mb:2}}>
        <Box component={'img'} src={pageText.image} sx={{width:'100%',maxWidth:30}} />
        <Typography variant="h2" sx={{fontWeight:500,my:0}}>{pageText.heading}</Typography>
      </Stack>
      :
      <Stack direction="column" alignItems="center" justifyContent="center" spacing={1} sx={{mb:2}}>
        <Box component={'img'} src={pageText.image} sx={{width:'100%',maxWidth:50}} />
        <Typography variant="h2" sx={{fontWeight:400,my:0}}>{pageText.heading}</Typography>
      </Stack>
    }

    <Typography className="gradientText" variant="body2" sx={{fontSize:{xs:16,sm:20}}}>{pageText.subHeading}</Typography>
      <Typography variant="body1" sx={{fontSize:13,lineHeight:'1.7em',mt:2}}>
      {pageText.intro}
      </Typography>
    <Typography variant="h3"  sx={{mt:{xs:3,sm:0},mb:{xs:2,sm:2},fontSize:{xs:15,sm:12},fontWeight:300}}>{pageText.difference}</Typography>
    {/* List */}
    <Stack direction="column" spacing={1.8} sx={{mb:4}}>
      {textLinks.map((item,index) => (
      <Stack direction="row" alignItems="flex-start"  spacing={1} key={index}>
        <Box sx={{pt:0.4}}><CircleCheck sx={{fontSize:{xs:16,sm:18}}} /></Box>
        <Typography variant="body1" sx={{mt:0.2,pt:0,fontSize:{xs:13,sm:14}}}>{item.text}</Typography>
    </Stack>
    ))}



    </Stack>
    <GradientButton  text={"Register your interest"} />
    </Stack>
  )
}
